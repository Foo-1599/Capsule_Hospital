import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'

// import Card, { CardTypeA, CardTypeB } from './src/components/Card';
import Header from './src/containers/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  header: {
    flex: 1
  },
  content: {
    flex: 3,
    backgroundColor: '#ffdfff'
  }
})

export default App;
