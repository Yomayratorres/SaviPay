import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import CardHeader from "@/components/CardHeader";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  return (
    <>
      <CardHeader />
      <View style={styles.container}>

        <View style={{ }}>
          <View style={{ display: "flex" }}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={{ width: 20, height: 20, marginLeft: 32, resizeMode: 'contain', marginBottom: -38, zIndex: 50, bottom: 12 }}
            />
            <Image
              source={require('@/assets/svgs/savipayvisa.svg')}
              style={{ width: 200, height: 200, marginRight: 50, resizeMode: 'contain', marginBottom: -99, zIndex: 10 }}
            />
          </View>
          <Image
            source={require('@/assets/svgs/visa.svg')}
            style={{ width: 200, height: 200, marginLeft: 60, resizeMode: 'contain', marginTop: -50 }}
          />
        </View>

        <View>
          <Text style={styles.text}>Spend online and offline with your SaviPay cards.</Text>
        </View>

        <View style={{
          paddingHorizontal: 20,
        }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 40, marginLeft: -12, }}>
            <Image
              source={require('@/assets/svgs/wallet.svg')}
              style={{ width: 45, height: 50, resizeMode: "contain" }}
            />
            <View style={{}}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 24,
              }}>
                Request a Card 
              </Text>

              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>
                we&apos;ll send it to you wherever you are.
                </Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginLeft: 28,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
    fontWeight: 'semibold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
  },
});
