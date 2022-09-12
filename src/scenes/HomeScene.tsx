import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';

const HomeScene = (): JSX.Element => {
  const sections = useMemo(() => {
    return [{welcome: {title: 'welcome'}}];
  }, []);
  // const welcomePressed = useCallback(() => {}, []);
  // const renderSection = useCallback(
  //   ({section}) => {
  //     switch (section) {
  //       case 'welcome':
  //         return (
  //           <View style={styles.welcomeContainer}>
  //             <Pressable onPress={welcomePressed}>
  //               <View style={styles.content}>
  //                 <Text>{section.title}</Text>
  //               </View>
  //             </Pressable>
  //           </View>
  //         );
  //     }
  //   },
  //   [welcomePressed],
  // );

  const renderSection = useCallback(() => {
    return (
      <View style={styles.content}>
        <Text>Test APPP</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList data={sections} renderItem={renderSection} />
    </SafeAreaView>
  );
};

export default HomeScene;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
