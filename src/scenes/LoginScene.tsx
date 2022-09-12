import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
// import {useFirebaseUserAuth} from '../context/Auth';

const LoginScene = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const {signIn, signOut, currentUser, initializing} = useFirebaseUserAuth();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              {/* <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={initializing}
              /> */}
            </View>
            {/* <View style={styles.buttonContainer}>
              {!currentUser && <Text>You are currently logged out</Text>}
              {currentUser && (
                <Button onPress={signOut} title="LogOut" color="red" />
              )}
            </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default LoginScene;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F9FEFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {flex: 1},
  scrollView: {flex: 1},
});
