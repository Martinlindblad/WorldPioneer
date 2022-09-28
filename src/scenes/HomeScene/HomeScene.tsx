import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import WelcomeHeader from './components/WelcomeHeader';

const HomeScene = (): JSX.Element => {
  const sections = useMemo(() => {
    return [
      {title: 'Welcome', type: 'Welcome'},
      {title: 'Carousel', type: 'Carousel'},
    ];
  }, []);
  // const welcomePressed = useCallback(() => {}, []);

  const renderSection = useCallback(
    ({item}: {item: {title: string; type: string}}) => {
      switch (item.type) {
        case 'Welcome':
          return (
            <View style={styles.item}>
              <Text style={{paddingVertical: 20}}>{item.title}</Text>
              <WelcomeHeader />
            </View>
          );
        case 'Carousel':
          return (
            <View style={styles.item}>
              <Text style={{paddingVertical: 20}}>{item.title}</Text>
            </View>
          );

        default:
          break;
      }
      return (
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      );
    },
    [],
  );

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
  item: {
    width: '100%',
    backgroundColor: 'orange',
  },
});
