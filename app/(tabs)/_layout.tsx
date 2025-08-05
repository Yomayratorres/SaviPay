import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Octicons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="send"
        options={{
          title: 'Send',
          tabBarIcon: ({ color }) => <Feather size={28} name="send" color={color} />,
        }}
      />

      <Tabs.Screen
        name="invest"
        options={{
          title: 'Invest',
          tabBarIcon: ({ color }) => <Entypo size={28} name="bar-graph" color={color} />,
        }}
      />

      <Tabs.Screen
        name="card"
        options={{
          title: 'Card',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="credit-card-alt" color={color} />,
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="dots-grid" color={color} />,
        }}
      />
    </Tabs>
  );
}
