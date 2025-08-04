import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import { Colors } from '@/constants/Colors'
import { Image } from 'expo-image'
import Hr from '@/components/ui/Hr'

const HomeScreen = () => {

  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          > */}
          <View style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingVertical: 20,
            gap: 15,
            paddingHorizontal: 10,
          }}>
            <Button
              title="Spend"
              color={Colors.grey}
            />
            <Button title="Save" color={Colors.grey} />
            <Button title="Borrow" color={Colors.grey} />
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, alignItems: 'flex-start', display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Image
              source={require('@/assets/svgs/nigeria.svg')}
              style={{ width: 30, height: 30 }}
            />
            <View style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', gap: 45 }}>
              <Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>
                Nigerian Naira
              </Text>
            </View>
          </View>
          {/* </View> */}
          <View style={{ flexDirection: 'column', paddingHorizontal: 20, }}>
            <View style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <Text
                style={{ color: Colors.white, fontSize: 36, fontWeight: 700 }}
              >
                ₦11,475.<Text style={{ fontSize: 22, fontWeight: 400 }}>00</Text>
              </Text>

              <Image
                source={require('@/assets/svgs/more.svg')}
                style={{ width: 30, height: 30, marginTop: 10 }}
              />
            </View>

            <Text
              style={{
                color: Colors.gray,
                fontSize: 16,
                marginTop: 10,
              }}
            >
              Last Updated 2 minutes ago.
            </Text>
          </View>

          <View style={{ display: 'flex', paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('@/assets/svgs/send-outline.svg')}
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
              <Text style={styles.text}>Transfer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Image
                source={require('@/assets/svgs/add.svg')}
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
              <Text style={styles.text}>Add Money</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 40, alignItems: 'flex-start', paddingHorizontal: 20, }}>
            <Text style={{ color: Colors.white, fontSize: 16, fontWeight: 'bold' }}>
              Quick Access
            </Text>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, gap: 10 }}>
              <TouchableOpacity style={styles.buttons}>
                <Image
                  source={require('@/assets/svgs/send.svg')}
                  style={{ width: 20, height: 20, marginRight: 10 }}
                />
                <Text style={styles.text}>Send</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttons}>
                <Image
                  source={require('@/assets/svgs/airtime.svg')}
                  style={{ width: 20, height: 20, marginRight: 10, resizeMode: 'contain' }}
                />
                <Text style={styles.text}>Airtime</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttons}>
                <Image
                  source={require('@/assets/svgs/bills.svg')}
                  style={{ width: 20, height: 20, marginRight: 10, resizeMode: 'contain' }}
                />
                <Text style={styles.text}>Bills</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, backgroundColor: Colors.grey, width: "100%" }}>
            <Text style={{
              color: Colors.gray,
              marginLeft: 8,
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
            }}>
              8/08/2025
            </Text>
          </View>

          <View style={{
            paddingHorizontal: 20,
          }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, width: "100%" }}>
              <Image
                source={require('@/assets/svgs/acessBank.svg')}
                style={{ width: 40, height: 40 }}
              />
              <View style={{}}>
                <Text style={{
                  color: Colors.white,
                  marginLeft: 8,
                  fontWeight: 'bold',
                  fontSize: 16,
                  textAlign: 'center',
                }}>Mary John Ojuelegba</Text>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: 8,
                  fontWeight: 'semibold',
                  fontSize: 16,
                }}>4:06 PM</Text>
              </View>

              <Text style={{
                color: Colors.white,
                marginLeft: 58,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>₦1,500</Text>
            </View>
            <Hr />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, width: "100%" }}>
              <Image
                source={require('@/assets/svgs/mtn.svg')}
                style={{ width: 40, height: 40 }}
              />
              <View style={{}}>
                <Text style={{
                  color: Colors.white,
                  marginLeft: 8,
                  fontWeight: 'bold',
                  fontSize: 16,
                  textAlign: 'center',
                }}>MTN NG Data 091******9</Text>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: 8,
                  fontWeight: 'semibold',
                  fontSize: 16,
                }}>10:15 AM</Text>
              </View>

              <Text style={{
                color: Colors.white,
                marginLeft: 28,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>₦500</Text>
            </View>
            <Hr />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, width: "100%" }}>
              <Image
                source={require('@/assets/svgs/gtco.svg')}
                style={{ width: 40, height: 40 }}
              />
              <View style={{}}>
                <Text style={{
                  color: Colors.white,
                  marginLeft: 8,
                  fontWeight: 'bold',
                  fontSize: 16,
                  textAlign: 'center',
                }}>Chukwuma Daniel Ujala</Text>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: 8,
                  fontWeight: 'semibold',
                  fontSize: 16,
                }}>8:05 AM</Text>
              </View>

              <Text style={{
                color: Colors.green,
                marginLeft: 38,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>+₦2,000</Text>
            </View>

            <TouchableOpacity style={styles.more}>
              <Image
                source={require('@/assets/svgs/search.svg')}
                style={{ width: 25, height: 25, resizeMode: "contain" }}
              />
              <Text style={styles.text}>View More</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    // 
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
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
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