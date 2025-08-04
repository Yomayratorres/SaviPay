import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Hr from "./ui/Hr";

const CardHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.wrapper}
      >
        <View style={styles.userInfoWrapper}>
          <Text style={styles.boldText}>Cards</Text>
        </View>
        
          <Text style={styles.btnText}>Get Card</Text>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.btnWrapper}
        >
          <Ionicons name="add-sharp" size={30} color={Colors.white} style={{}} />
        </TouchableOpacity>
      </View>
      <Hr />
    </SafeAreaView>
  );
};

export default CardHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 130,
  },
  boldText: {
    fontWeight: '700',
    color: Colors.white,
    fontSize: 24,
  },
  btnWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    display: "flex",
    backgroundColor: Colors.tintColor,
    borderRadius: 50,
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    marginLeft: 40,
    marginRight: 5
  },
});
