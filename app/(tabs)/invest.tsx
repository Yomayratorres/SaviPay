import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import InvestHeader from '@/components/InvestHeader'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'

const Invest = () => {
  return (
    <>
      <InvestHeader />

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, gap: 10 }}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.text1}>US Stocks</Text>
        </TouchableOpacity>
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "center", marginTop: 10, gap: 10 }}>
        <Image
          source={require('@/assets/svgs/chart.svg')}
          style={{ width: 200, height: 200, marginRight: 10, resizeMode: 'contain' }}
        />
        <Text style={styles.text2}>Invest with SaviPay</Text>
        <Text style={styles.text3}>Choose an option below to grow your money. please remember that investments fluctuate and kuda doesn’t give investment advice. </Text>
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 10, gap: 10 }}>

        <TouchableOpacity style={styles.buttons2}>
          <Text style={styles.text4}>US Stocks</Text>
          <Text style={styles.text5}>Trade thousands of US stocks with as little as $10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons1}>
          <View style={styles.buttons2}>
            <Image
              source={require('@/assets/svgs/cs1.svg')}
              style={{ width: 100, height: 20, marginLeft: 8, resizeMode: 'contain' }}
            />
            <Text style={styles.text4}>Managed Funds</Text>
            <Text style={styles.text6}>Invest in professionally managed products.</Text>
          </View>
          <Image
            source={require('@/assets/svgs/pie-cs.svg')}
            style={{ width: 50, height: 50, marginRight: 10, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Invest

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    padding: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons1: {
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    padding: 5,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttons2: {
    flexDirection: 'column',
    backgroundColor: Colors.grey,
    padding: 5,
    borderRadius: 8,
    // width: "100%",
    alignItems: "flex-start"
  },
  text: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'semibold',
    fontSize: 16,
    textAlign: 'center',
  },
  text1: {
    color: Colors.gray,
    marginLeft: 8,
    fontWeight: 'semibold',
    fontSize: 16,
    textAlign: 'center',
  },
  text2: {
    color: Colors.white,
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  text3: {
    color: Colors.light.icon,
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  text4: {
    color: Colors.white,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  text5: {
    color: Colors.gray,
    marginLeft: 8,
    fontWeight: 'semibold',
    fontSize: 15,
    maxWidth: 329,
  },
  text6: {
    color: Colors.gray,
    marginLeft: 8,
    fontWeight: 'semibold',
    fontSize: 15,
    maxWidth: 260,
  },
  more: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: Colors.grey,
    padding: 10,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '54%',
    marginLeft: "25%",
    marginBottom: 10,
  },
});