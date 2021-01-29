import * as React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageRequireSource, StatusBar, View} from 'react-native';

const girlImage = require('./assets/images/toyFaces_girl.png') as ImageRequireSource;
const boyImage = require('./assets/images/toyFaces_boy.png') as ImageRequireSource;
const logo = require('./assets/images/logo.png') as ImageRequireSource;

// colors
const Colors = {
  primary: '#FF4B3A',
  secondary: '#FF470B',
  white: '#fff',
  transparent: '#00000000',
};

const FirstChallenge = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <Background>
        <Container>
          <View>
            <LogoContainer>
              <Logo source={logo} />
            </LogoContainer>
            <Title>Food for Everyone</Title>
          </View>

          <Button>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </Container>
        <BoyView>
          <BoyImage source={boyImage} style={{resizeMode: 'contain'}} />
          <GradientLayerOverBoy
            colors={[Colors.transparent, Colors.secondary]}
          />
        </BoyView>
        <GirlView>
          <GirlImage source={girlImage} style={{resizeMode: 'contain'}} />
          <GradientLayerOverGirl
            colors={[Colors.transparent, Colors.secondary]}
          />
        </GirlView>
        <GradientLayerBackground
          colors={[Colors.transparent, Colors.secondary]}
        />
      </Background>
    </>
  );
};

export default FirstChallenge;

// Background
const Background = styled.View`
  background-color: #ff4b3a;
  display: flex;
  flex: 1;
  position: relative;
`;

// Container
const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 50px 30px 50px;
`;

// Header
const LogoContainer = styled.View`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #fff;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

const Title = styled.Text`
  font-size: 50px;
  color: #fff;
  font-family: 'SF-Pro-Rounded-Black';
  text-align: left;
`;

const GradientLayerBackground = styled(LinearGradient)`
  height: 50%;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 15%;
`;

// Girl Image
const GirlView = styled.View`
  height: 50%;
  width: 80%;
  transform: rotate(-3.1deg);
  position: absolute;
  left: -27%;
  bottom: 15%;
  z-index: 2;
`;

const GirlImage = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const GradientLayerOverGirl = styled(LinearGradient)`
  width: 96%;
  height: 50%;
  position: absolute;
  z-index: 2;
  bottom: 0;
`;

// Boy Image
const BoyView = styled.View`
  height: 35%;
  width: 100%;
  transform: rotate(8.6deg);
  position: absolute;
  right: -33%;
  bottom: 20%;
  z-index: 2;
`;

const BoyImage = styled.Image`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const GradientLayerOverBoy = styled(LinearGradient)`
  width: 100%;
  height: 30%;
  position: absolute;
  z-index: 2;
  bottom: 0;
`;

// Button
const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ff4b3a;
  font-size: 16px;
  font-family: 'SFProText-Regular-1';
  margin: 20px;
`;
