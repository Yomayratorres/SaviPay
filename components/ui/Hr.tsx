import React from 'react';
import { View, StyleSheet } from 'react-native';

const Hr = () => (
  <View style={styles.hr} />
);

const styles = StyleSheet.create({
  hr: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Hr;
