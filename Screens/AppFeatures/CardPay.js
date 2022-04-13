import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  CardField,
  useConfirmPayment,
  CardFieldInput,
} from "@stripe/stripe-react-native";
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
    if (!cardDetails?.complete || !email) {
      Alert.alert("Enter Email and Card Details ");
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
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              top: -90,
              fontFamily: "Comfortaa",
              lineHeight: 50,
              color: "#F2F2F2",
            }}
          >
            {" "}
            Pay a Friend 🤝
          </Text>

          <Text
            style={{
              fontSize: 20,
              top: -90,
              fontFamily: "Comfortaa",
              lineHeight: 50,
              color: "#F2F2F2",
              left: 0,
            }}
          >
            {" "}
            Easy. Smooth. Quick.
          </Text>
          <View
            style={{
              top: -10,
            }}
          >
            <TextInput
              autoCapitalize="none"
              placeholder="Enter your e-mail"
              keyboardType="email-address"
              onChange={(value) => setEmail(value.nativeEvent.text)}
              style={styles.input}
              autoFocus={true}
            />

            <Image
              source={require("../../assets/icons/email.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                top: -40,
                left: 5,
              }}
            />
          </View>

          <View
            style={{
              top: -40,
            }}
          >
            <CardField
              placeholder={{ number: "4242 4242 4242 4242" }}
              cardStyle={styles.card}
              style={styles.cardContainer}
              onCardChange={(cardDetails) => {
                setCardDetails(cardDetails);
              }}
            />
          </View>
          <View
            style={{
              top: -35,
            }}
          >
            <TextInput
              autoCapitalize="none"
              placeholder="Receiver's Account Number"
              keyboardType="number-pad"
              style={styles.input}
              autoFocus={false}
            />

            <Image
              source={require("../../assets/icons/crediti.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                top: -40,
                left: 5,
              }}
            />
          </View>

          <View
            style={{
              top: -25,
            }}
          >
            <TextInput
              autoCapitalize="none"
              keyboardType="number-pad"
              autoFocus={false}
              style={styles.input}
            />

            <Text
              style={{
                top: -40,

                fontFamily: "Poppins",
                fontSize: 18,
              }}
            >
              {" "}
              AED
            </Text>
          </View>

          <TouchableOpacity
            onPress={handlePayment}
            disabled={loading}
            style={styles.Button}
          >
            <Text
              style={{ fontFamily: "Poppins", fontSize: 24, color: "#0F4D92" }}
            >
              Pay
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};
export default CardPay;

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP("100%"),
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
    top: 5,
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
    fontSize: 16,
    height: 50,
    width: 400,
    padding: 10,
    fontFamily: "Comfortaa",
    paddingLeft: 45,
  },

  card: {
    backgroundColor: "#efefefef",
    top: -50,
    left: -20,
  },

  cardContainer: {
    height: 50,
    marginVertical: 30,
    width: 400,
  },
});
