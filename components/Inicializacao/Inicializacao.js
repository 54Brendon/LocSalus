import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import * as Animatable from 'react-native-animatable';

const screenWidth = Dimensions.get('window').width;

const Inicializacao = () => {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({
      Daydream_400Regular: {
        uri: 'https://fonts.cdnfonts.com/css/daydream',
      },
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Animatable.View style={styles.container} animation="fadeIn" duration={1500} delay={500}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f623476202012da29fdcccc0bf58a1c4c1db3bb67993a54a8410c1b3a044c11?apiKey=43087b9600024da7b7591aeaa0192f8a',
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <Animatable.View style={styles.circle} animation="fadeIn" duration={1500} delay={1000}>
        <Text style={[styles.letter, { transform: [{ rotate: '-20deg' }, { skewY: '-5deg' }], marginTop: 30 }]}>L</Text>
        <Text style={[styles.letter, { transform: [{ rotate: '10deg' }, { skewY: '10deg' }], marginTop: 50 }]}>S</Text>
      </Animatable.View>
      <Animatable.Text style={styles.text} animation="fadeIn" duration={1500} delay={1500}>LocSalus</Animatable.Text>
    </Animatable.View>
  );
};

const imageSize = 69;
const circleSize = 118;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8E1F1',
    width: screenWidth,
  },
  image: {
    width: imageSize,
    height: imageSize,
    marginBottom: 20,
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#001E47',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  letter: {
    fontFamily: 'Daydream_400Regular',
    fontSize: 120,
    color: '#B8E1F1',
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 24,
    color: '#001e47',
    fontWeight: '500',
  },
});

export default Inicializacao;
