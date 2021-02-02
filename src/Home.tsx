import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageRequireSource,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const cardWidth = Dimensions.get('screen').width - 40;

const challenges = [
  {
    number: 1,
    name: 'Food for everyone',
    description: 'Basic splash screen',
    route: 'first',
    img: require('../README_ASSETS/first.png') as ImageRequireSource,
  },
  {
    number: 2,
    name: 'First Challenge',
    description: 'First Challenge',
    route: 'first',
    img: require('../README_ASSETS/first.png') as ImageRequireSource,
  },
];

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
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
                <View style={styles.cardTitleContainer}>
                  <Text style={styles.cardTitle}>{challenge.name}</Text>
                  <Text style={styles.cardSubTitle}>
                    {challenge.description}
                  </Text>
                </View>

                <View style={styles.imageContainer}>
                  <View style={styles.cardNumberContainer}>
                    <Text style={styles.cardNumber}>{challenge.number}</Text>
                  </View>
                  <Image source={challenge.img} style={styles.image} />
                </View>
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
    borderBottomWidth: 4,
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
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 4,
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitleContainer: {
    paddingVertical: 30,
    borderTopColor: '#000',
    borderTopWidth: 4,
  },
  cardTitle: {
    width: cardWidth,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Changa-ExtraBold',
  },
  cardSubTitle: {
    width: cardWidth,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'ChakraPetch-Regular',
  },
  imageContainer: {position: 'relative'},
  image: {
    height: cardWidth,
    width: cardWidth,
    resizeMode: 'cover',
  },
  cardNumberContainer: {
    width: 55,
    height: 55,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: -4,
    left: -4,
    zIndex: 2,
    borderWidth: 4,
    borderColor: '#000',
  },
  cardNumber: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Changa-ExtraBold',
  },
});
