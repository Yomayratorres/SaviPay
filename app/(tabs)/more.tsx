import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import MoreHeader from '@/components/MoreHeader'
import Hr from '@/components/ui/Hr'
import { UserHeader } from '@/components/Header'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'

const Page = () => {
  return (
    <>
      <MoreHeader />
      <ScrollView style={{marginBottom: 20}} showsVerticalScrollIndicator={false}>
        <UserHeader />
        <Hr />

        <View style={{
          paddingHorizontal: 20,
        }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: -12, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/images/icon.png')}
              style={{ width: 80, height: 80, resizeMode: "contain", marginLeft: -10 }}
            />
            <View style={{ marginLeft: -68 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Get SaviPay Business
              </Text>
            </View>

            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color={Colors.white} style={{
                color: Colors.white,
                fontWeight: 'bold',
                fontSize: 26,
                textAlign: 'right',
              }} />
            </TouchableOpacity>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/str.svg')}
              style={{ width: 40, height: 45, resizeMode: "contain" }}
            />
            <View style={{ marginLeft: -68 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: 28,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Statements & Reports
              </Text>

              <Text style={{
                color: Colors.gray,
                marginLeft: 28,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>
                Download monthly statements
              </Text>
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
              source={require('@/assets/svgs/scards.svg')}
              style={{ width: 45, height: 45, resizeMode: "contain", marginLeft: 10 }}
            />
            <View style={{ marginLeft: -56 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: -18,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Saved Cards
              </Text>

              <Text style={{
                color: Colors.gray,
                marginLeft: -18,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>
                Manage connected cards
              </Text>
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
              source={require('@/assets/svgs/help.svg')}
              style={{ width: 40, height: 40 }}
            />
            <View style={{ marginLeft: -50 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Get Help
              </Text>

              <Text style={{
                color: Colors.gray,
                marginLeft: 8,
                fontWeight: 'semibold',
                fontSize: 14,
              }}>
                Get support or send feedback
              </Text>
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
              source={require('@/assets/svgs/security.svg')}
              style={{ width: 35, height: 45 }}
            />
            <View style={{ marginLeft: -20 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: -8,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Security
              </Text>

              <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: -8,
                  fontWeight: 'semibold',
                  fontSize: 14,
                }}>
                  Protect yourself from intruders
                </Text>
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

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/refs.svg')}
              style={{ width: 35, height: 35 }}
            />
            <View style={{ marginLeft: -20 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: 8,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Referrals
              </Text>

              <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: 8,
                  fontWeight: 'semibold',
                  fontSize: 14,
                  maxWidth: 200,
                }}>
                  Earn money when you invite your friends to SaviPay
                </Text>
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

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/limit.svg')}
              style={{ width: 35, height: 45 }}
            />
            <View style={{ marginLeft: -20 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: 38,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Account Limits
              </Text>

              <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: 38,
                  fontWeight: 'semibold',
                  fontSize: 14,
                }}>
                  How much you can spend and receive
                </Text>
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

          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: "space-between" }}>
            <Image
              source={require('@/assets/svgs/legal.svg')}
              style={{ width: 40, height: 40 }}
            />
            <View style={{ marginLeft: -20 }}>
              <Text style={{
                color: Colors.white,
                marginLeft: -28,
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'left',
              }}>
                Legal
              </Text>

              <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text style={{
                  color: Colors.gray,
                  marginLeft: -28,
                  fontWeight: 'semibold',
                  fontSize: 14,
                }}>
                  About our contracts with you
                </Text>
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

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
  },
})