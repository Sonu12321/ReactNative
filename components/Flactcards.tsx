import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Flashcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flashcards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Brown</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex:1,
    flexDirection: 'row',
    padding:28,

  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF0000',
  },
  cardTwo: {
    backgroundColor: '#008000',
  },
  cardThree: {
    backgroundColor: '#A52A2A',
  },
});
