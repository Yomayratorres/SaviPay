import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

const InvestHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.wrapper}
      >
        <View style={styles.userInfoWrapper}>
          <Text style={styles.boldText}>Invest</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InvestHeader;

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
    padding: 6,
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
  },
});
