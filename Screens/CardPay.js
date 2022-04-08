import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const API_URL = "http://localhost:19001";

const CardPay = () => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  const handlePayment = async () => {
    //1.Gather the customer's billing information (e.g., email)
    if (!cardDetails?.complete || !email) {
      Alert.alert("Please enter Complete card details and Email");
      return;
    }
    const billingDetails = {
      email: email,
    };
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });

        if (error) {
          alert(`Payment Confirmation Error: ${error.message}`);
        } else if (paymentIntent) {
          alert("Your Payment Was Successful");
          console.log("PAID", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="Enter your e-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />

      <CardField
        // postalCodeEnabled={true}
        placeholder={{ number: "4242 4242 4242 4242" }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />

      <TouchableOpacity
        onPress={handlePayment}
        disabled={loading}
        style={styles.Button}
      >
        <Text style={{ fontFamily: "Comfortaa", fontSize: 24 }}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CardPay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F4D92",
    alignItems: "center",
    justifyContent: "center",
  },

  Button: {
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("8%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    left: 3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  input: {
    backgroundColor: "#efefefef",
    borderRadius: 8,
    fontSize: 18,
    height: 50,
    width: 400,
    padding: 10,
    fontFamily: "Comfortaa",
  },

  card: {
    backgroundColor: "#efefefef",
    top: -20,
    left: -20,
  },

  cardContainer: {
    height: 50,
    marginVertical: 30,
    width: 400,
  },
});
