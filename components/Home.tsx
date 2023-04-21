import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Divider } from "react-native-paper";

import SwipeCards from "react-native-swipe-cards";

const Card = ({ text, translation, backgroundColor }) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text>{text}</Text>

      <Divider style={{ marginTop: 32 }} />
      <Button
        onPress={() => setShowTranslation(!showTranslation)}
        title="I know it"
        accessibilityLabel="I know the answer"
      />
      <Divider style={{ marginTop: 16 }} />

      <Text
        style={{
          display: showTranslation ? "flex" : "none",
          padding: 10,
          backgroundColor: "#ccc",
        }}
      >
        {translation}
      </Text>
    </View>
  );
};

const NoMoreCards = () => (
  <View>
    <Text style={styles.noMoreCardsText}>No more cards</Text>
  </View>
);

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { text: "Tomate", translation: "Tomato", backgroundColor: "lightgrey" },
        { text: "Perro", translation: "Dog", backgroundColor: "lightgrey" },
        { text: "Gato", translation: "Cat", backgroundColor: "lightgrey" },
        {
          text: "Hamburguesa",
          translation: "Burger",
          backgroundColor: "lightgrey",
        },
        { text: "Cabeza", translation: "Head", backgroundColor: "lightgrey" },
        { text: "Brazo", translation: "Arm", backgroundColor: "lightgrey" },
        { text: "Tomate", translation: "Tomato", backgroundColor: "lightgrey" },
      ],
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
});
