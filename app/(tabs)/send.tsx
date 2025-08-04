import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import SendHeader from '@/components/SendHeader'
import Hr from '@/components/ui/Hr'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'

const Send = () => {
  return (
    <>
      <SendHeader />
      <Hr />

      <ScrollView style={{ marginBottom: 10 }} showsVerticalScrollIndicator={false}>

        <View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
            <Text style={styles.text}>
              Beneficiaries
            </Text>
            <Text style={styles.text1}>
              View All
            </Text>
          </View>

          <View style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <View style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
              <Image
                source={require('@/assets/svgs/r.svg')}
                style={{ width: 45, height: 45, marginRight: 10, resizeMode: 'contain' }}
              />
              <Text style={styles.text2}>
                Rasheedat Omotoso
              </Text>
            </View>
            <View style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <Image
                source={require('@/assets/svgs/t.svg')}
                style={{ width: 45, height: 45, marginRight: 10, resizeMode: 'contain' }}
              />
              <Text style={styles.text2}>
                Tiamiyu Yinka
              </Text>
            </View>
            <View style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <Image
                source={require('@/assets/svgs/s.svg')}
                style={{ width: 45, height: 45, marginRight: 10, resizeMode: 'contain' }}
              />
              <Text style={styles.text2}>
                Sunday Babayaro
              </Text>
            </View>
            <View style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <Image
                source={require('@/assets/svgs/k.svg')}
                style={{ width: 45, height: 45, marginRight: 10, resizeMode: 'contain' }}
              />
              <Text style={styles.text2}>
                Kenechukwu Uche
              </Text>
            </View>
            <View style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap"
            }}>
              <Image
                source={require('@/assets/svgs/o.svg')}
                style={{ width: 45, height: 45, marginRight: 10, resizeMode: 'contain' }}
              />
              <Text style={styles.text2}>
                Okoye Innocent
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.text3}>Send Money</Text>
          <Text style={styles.text4}>Free Transfers to other banks 5</Text>
        </View>

        <View style={{
          paddingHorizontal: 20,
        }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: -12, }}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={{ width: 45, height: 45 }}
            />
            <View style={{}}>
              <Text style={{
                color: Colors.white,
                marginLeft: -78,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>Send to @username</Text>
              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>Send to any SaviPay account for free.</Text>
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

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, width: "100%" }}>
            <Image
              source={require('@/assets/svgs/send.svg')}
              style={{ width: 25, height: 25 }}
            />
            <View style={{}}>
              <Text style={{
                color: Colors.white,
                marginLeft: -8,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>Send to Bank Account</Text>
              <Text style={{
                color: Colors.gray,
                marginLeft: 18,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>Send to a  local bank account.</Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginLeft: 68,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.text3}>Pay Bills</Text>
        </View>

        <View style={{
          paddingHorizontal: 20,
        }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: -12, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/airtime.svg')}
              style={{ width: 30, height: 30, resizeMode: "contain", marginLeft: 10 }}
            />
            <View style={{ marginLeft: -68}}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'left',
              }}>Buy Airtime </Text>
              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
                textAlign: 'left',
              }}>Recharge any phone easily</Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'right',
              }} />
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/bills.svg')}
              style={{ width: 25, height: 25, resizeMode: "contain" }}
            />
            <View style={{marginLeft: -68}}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'left',
              }}>Pay A Bill</Text>
              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>Airtime, data and utilities </Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              }} />
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: -12, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/card.svg')}
              style={{ width: 35, height: 35, resizeMode: "contain", marginLeft: 10 }}
            />
            <View style={{marginLeft: -56}}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'left',
              }}>Gift Cards</Text>
              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>Shop around the world online </Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              }} />
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/net.svg')}
              style={{ width: 35, height: 35 }}
            />
            <View style={{marginLeft: -50}}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'left',
              }}>Cardless Payments</Text>

              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>Make payments without a card</Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'center',
              }} />
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/time.svg')}
              style={{ width: 35, height: 35 }}
            />
            <View style={{marginLeft: -20}}>
              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'left',
              }}>Scheduled Payments </Text>

              <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: 8,
                  fontWeight: 'semibold',
                  fontSize: 14,
                  maxWidth: 150
                }}>Future payments and standing orders.</Text>
                <Image
                  source={require('@/assets/svgs/cs.svg')}
                  style={{ width: 70, height: 15, marginTop: 5 }}
                />
              </View>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                marginTop: -15,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'right',
              }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default Send

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
    fontSize: 20,
    textAlign: 'center',
  },
  text1: {
    color: Colors.tintColor,
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  text2: {
    color: '#fff',
    fontWeight: 'semibold',
    fontSize: 12,
    textAlign: 'center',
    maxWidth: 70
  },
  text3: {
    color: Colors.white,
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
  },
  text4: {
    color: Colors.gray,
    marginLeft: 8,
    fontWeight: 'semibold',
    fontSize: 16,
    textAlign: 'left',
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