import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const AuthHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.wrapper}
      >
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={styles.userImg}
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center", }}>
          <Text style={styles.boldText}>Welcome Back</Text>
          <Text style={[styles.userText, { fontSize: 18, fontWeight: "semibold" }]}>Chinonso Chikelue (fluantiX)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthHeader;


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "center",
    // height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: -20,
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    marginTop: 60,
    borderColor: Colors.tintColor,
  },
  userTxtWrapper: {
    marginLeft: 10,
  },
  userText: {
    color: Colors.white,
    marginTop: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 40,
    fontSize: 28,
  },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
  },
});
