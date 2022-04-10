import { StyleSheet, Picker, View } from "react-native";
import React, { useState } from "react";

const picker = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="18-24" value="age" />
        <Picker.Item label="25-34" value="age2" />
        <Picker.Item label="35-44" value="age3" />
        <Picker.Item label="55+" value="age4" />
      </Picker>
    </View>
  );
};

export default picker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    left: 50,
    top: -90,
  },
});
