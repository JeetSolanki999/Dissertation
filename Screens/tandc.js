import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const TandC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Image
          source={require("../assets/WhiteArrow_Icon.png")}
          resizeMode="contain"
          style={{ height: 29, width: 28, right: -10, top: 90 }}
        />
      </TouchableOpacity>

      <Text style={styles.h1}> Terms and Conditions </Text>

      <View style={styles.card}>
        <ScrollView>
          <Text style={styles.h}> 1. The Application </Text>
          <Text style={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Blandit
            turpis cursus in hac habitasse platea. Mauris pellentesque pulvinar
            pellentesque habitant morbi. Leo vel orci porta non pulvinar neque
            laoreet. Vel pharetra vel turpis nunc eget lorem. Integer vitae
            justo eget magna fermentum iaculis eu non diam. Adipiscing commodo
            elit at imperdiet. Amet est placerat in egestas erat imperdiet sed.
            Urna porttitor rhoncus dolor purus non enim praesent elementum
            facilisis. Placerat vestibulum lectus mauris ultrices eros in
            cursus. Arcu cursus euismod quis viverra nibh cras pulvinar. Nulla
            aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Ipsum
            nunc aliquet bibendum enim facilisis. Sit amet est placerat in
            egestas erat. Nunc sed augue lacus viverra vitae congue. Vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.
            Mi in nulla posuere sollicitudin aliquam ultrices.
          </Text>

          <Text style={styles.h}> 2. Scope of License</Text>
          <Text style={styles.p}>
            Cum sociis natoque penatibus et. Sed lectus vestibulum mattis
            ullamcorper velit. Tellus at urna condimentum mattis pellentesque id
            nibh tortor. Vestibulum mattis ullamcorper velit sed ullamcorper
            morbi tincidunt ornare massa. Sit amet massa vitae tortor
            condimentum lacinia quis. Viverra nibh cras pulvinar mattis nunc sed
            blandit. Blandit aliquam etiam erat velit scelerisque in. Sit amet
            massa vitae tortor. Lacinia at quis risus sed vulputate odio ut
            enim. Turpis egestas sed tempus urna et pharetra pharetra massa
            massa.
          </Text>

          <Text style={styles.h}> 3. Technical Requirements </Text>
          <Text style={styles.p}>
            Vitae suscipit tellus mauris a. Curabitur gravida arcu ac tortor
            dignissim convallis. Duis at tellus at urna. Ultrices eros in cursus
            turpis massa tincidunt. Vehicula ipsum a arcu cursus vitae congue
            mauris. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Ac
            turpis egestas sed tempus urna et pharetra. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Vitae aliquet nec ullamcorper sit
            amet risus nullam. Vel pretium lectus quam id. Ac tincidunt vitae
            semper quis lectus nulla at volutpat diam. Urna porttitor rhoncus
            dolor purus.
          </Text>

          <Text style={styles.h}> 4. User-Generated Contributions </Text>
          <Text style={styles.p}>
            At tellus at urna condimentum. Ac felis donec et odio pellentesque
            diam volutpat commodo. Sit amet dictum sit amet justo donec.
            Elementum nisi quis eleifend quam adipiscing vitae. Sed euismod nisi
            porta lorem mollis. Ut sem viverra aliquet eget. Quis vel eros donec
            ac odio tempor orci dapibus ultrices. Purus in mollis nunc sed id
            semper. Sed vulputate mi sit amet mauris commodo quis imperdiet.
            Ullamcorper sit amet risus nullam eget felis eget. Nisi scelerisque
            eu ultrices vitae auctor eu. Arcu felis bibendum ut tristique et
            egestas quis ipsum suspendisse. Sit amet porttitor eget dolor morbi
            non. Auctor eu augue ut lectus arcu bibendum at varius. Facilisis
            volutpat est velit egestas dui id.
          </Text>

          <Text style={styles.h}> 5. Liability </Text>
          <Text style={styles.p}>
            Convallis posuere morbi leo urna molestie at elementum eu facilisis.
            Odio morbi quis commodo odio aenean. Ac ut consequat semper viverra
            nam libero. Tempus imperdiet nulla malesuada pellentesque elit eget
            gravida. Cras tincidunt lobortis feugiat vivamus. Mattis
            pellentesque id nibh tortor id aliquet lectus proin. Tellus at urna
            condimentum mattis pellentesque. Feugiat in ante metus dictum. Eu
            sem integer vitae justo eget magna fermentum iaculis. Diam maecenas
            sed enim ut sem. Gravida dictum fusce ut placerat orci nulla
            pellentesque. Montes nascetur ridiculus mus mauris vitae ultricies
            leo integer. Venenatis tellus in metus vulputate eu scelerisque
            felis imperdiet proin. Purus in massa tempor nec feugiat nisl
            pretium.
          </Text>

          <Text style={styles.h}> 6. Maintainence and Support </Text>
          <Text style={styles.p}>
            Convallis posuere morbi leo urna molestie at elementum eu facilisis.
            Odio morbi quis commodo odio aenean. Ac ut consequat semper viverra
            nam libero. Tempus imperdiet nulla malesuada pellentesque elit eget
            gravida. Cras tincidunt lobortis feugiat vivamus. Mattis
            pellentesque id nibh tortor id aliquet lectus proin. Tellus at urna
            condimentum mattis pellentesque. Feugiat in ante metus dictum. Eu
            sem integer vitae justo eget magna fermentum iaculis. Diam maecenas
            sed enim ut sem. Gravida dictum fusce ut placerat orci nulla
            pellentesque. Montes nascetur ridiculus mus mauris vitae ultricies
            leo integer. Venenatis tellus in metus vulputate eu scelerisque
            felis imperdiet proin. Purus in massa tempor nec feugiat nisl
            pretium.
          </Text>

          <Text style={styles.h}> 7. Contact Information </Text>
          <Text style={styles.p}>
            Name: Jeet Solanki {"\n"}
            Email: js150@hw.ac.uk {"\n"}
            Heriot-Watt University {"\n"}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default TandC;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F4D92",
    height: heightPercentageToDP("100%"),
  },

  h1: {
    fontSize: 30,
    fontFamily: "Comfortaa",
    color: "#fff",
    alignItems: "center",
    top: 110,
    left: 32,
  },

  h: {
    fontFamily: "Poppins",
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },

  p: {
    fontFamily: "Comfortaa",
    paddingLeft: 15,
    lineHeight: 20,
    textAlign: "justify",
    paddingRight: 15,
    fontSize: 13,
  },

  card: {
    height: heightPercentageToDP("60%"),
    width: widthPercentageToDP("90%"),
    backgroundColor: "#fff",
    borderRadius: 15,
    left: 22,
    top: 150,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});
