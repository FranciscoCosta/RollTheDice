import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {PropsWithChildren, useState} from 'react';
import {
  diceOne,
  diceTwo,
  diceThree,
  diceFour,
  diceFive,
  diceSix,
} from '../assets/index';

const Dice = ({imageUrl}: DiceProps): JsxElment => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

//Francisco Costa

export default function App(): JSX.Element {
  const [randomDice, setrandomDice] = useState<ImageSourcePropType>(diceOne);

  const randomDiceC = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    if (number === 1) {
      setrandomDice(diceOne);
    }
    if (number === 2) {
      setrandomDice(diceTwo);
    }
    if (number === 3) {
      setrandomDice(diceThree);
    }
    if (number === 4) {
      setrandomDice(diceFour);
    }
    if (number === 5) {
      setrandomDice(diceFive);
    }
    if (number === 6) {
      setrandomDice(diceSix);
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={randomDice} />
      <TouchableOpacity style={styles.btnDice} onPress={() => randomDiceC()}>
        <Text style={styles.diceText}>Lançar dado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#c7d8e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    height: 300,
    width: 300,
  },
  btnDice: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 25,
    backgroundColor: 'crimson',
    elevation: 4,
  },
  diceText: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#fff',
  },
});
