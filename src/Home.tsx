import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageRequireSource,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const cardWidth = Dimensions.get('screen').width - 40;

const challenges = [
  {
    number: 1,
    name: 'First Challenge',
    route: 'first',
    img: require('../README_ASSETS/first.png') as ImageRequireSource,
  },
  {
    number: 2,
    name: 'First Challenge',
    route: 'first',
    img: require('../README_ASSETS/first.png') as ImageRequireSource,
  },
];

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>UI Challenge</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        horizontal
        pagingEnabled
        indicatorStyle="black">
        {challenges.map((challenge) => {
          return (
            <View style={styles.cardContainer} key={challenge.number}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigate(challenge.route)}>
                <Text style={styles.cardTitle}>{challenge.name}</Text>
                <Image source={challenge.img} style={styles.image} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'Changa-ExtraBold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
  },
  containerContent: {flexGrow: 1},
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    width: cardWidth,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Changa-ExtraBold',
    paddingVertical: 30,
    borderTopColor: '#000',
    borderTopWidth: 2,
  },
  image: {
    height: cardWidth,
    width: cardWidth,
    resizeMode: 'cover',
    borderTopColor: '#000',
    borderTopWidth: 2,
  },
});
