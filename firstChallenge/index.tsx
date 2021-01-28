import * as React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ImageRequireSource, StatusBar} from 'react-native';

const girlImage = require('./assets/images/toyFaces_girl.png') as ImageRequireSource;
const boyImage = require('./assets/images/toyFaces_boy.png') as ImageRequireSource;

export interface FirstChallengeProps {}

const FirstChallenge: React.FC<FirstChallengeProps> = () => {
  return (
    <>
      <StatusBar backgroundColor="#FF4B3A" barStyle="light-content" />
      <Container colors={['#FF4B3A', '#FF470B']}>
        <LogoContainer></LogoContainer>
        <Title>Food for Everyone</Title>

        <BoyImage source={boyImage} style={{resizeMode: 'contain'}} />
        <GradientLayerOverBoy colors={['#FF4B3A00', '#FF470B', '#FF470B']} />
        <GirlImage source={girlImage} style={{resizeMode: 'contain'}} />
        <GradientLayerOverGirl colors={['#FF4B3A00', '#FF470B', '#FF470B']} />
      </Container>
    </>
  );
};

export default FirstChallenge;

const Container = styled(LinearGradient)`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #7163df;
  padding: 50px;
  position: relative;
`;

const LogoContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 50px;
  color: #fff;
  font-family: 'SF-Pro-Rounded-Black';
  text-align: left;
`;

const GirlImage = styled.Image`
  height: 450px;
  width: 350px;
  transform: rotate(-3.1deg);
  position: absolute;
  left: -130px;
  bottom: 100px;
`;

const BoyImage = styled.Image`
  height: 300px;
  width: 300px;
  transform: rotate(8.6deg);
  position: absolute;
  right: -75px;
  bottom: 150px;
`;

const GradientLayerOverBoy = styled(LinearGradient)`
  width: 110%;
  height: 200px;
  position: absolute;
  bottom: 70px;
  right: 0;
`;

const GradientLayerOverGirl = styled(LinearGradient)`
  width: 70%;
  height: 200px;
  position: absolute;
  bottom: 70px;
  left: 0;
`;
