import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  welcomeContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },

  item: {
    width: '100%',
    backgroundColor: 'orange',
  },
  headerText: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'times',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  imageContainer: {
    width: 65,
    height: 65,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 65,
  },
});

const WelcomeHeader = () => {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.imageContainer}></View>
      <View>
        <Text style={styles.headerText}>World Pioneer</Text>
        <Text style={styles.subtitle}>Welcome traveler!</Text>
        <Text style={styles.subtitle}>Nagisa</Text>
      </View>
    </View>
  );
};

export default WelcomeHeader;
