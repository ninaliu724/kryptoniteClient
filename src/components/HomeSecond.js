import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";

import Icon from "react-native-vector-icons/MaterialIcons";
import Iconz from "react-native-vector-icons/Ionicons";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
var image1 = require("../images/image1.jpeg");
var image2 = require("../images/image2.jpeg");
var image3 = require("../images/image3.jpeg");
var image4 = require("../images/image4.jpeg");
var image5 = require("../images/image5.jpeg");
var image6 = require("../images/image6.jpeg");

const Cards = [
  {
    id: 1,
    first_name: "Denise",
    age: 21,
    friends: 9,
    occupation: "painter",
    occupationPlace: "Muse",
    location: "Reston, VA",
    selfDescription: "I am an artist! Let's talk about arts!",
    interests: 38,
    image: image1
  },
  {
    id: 2,
    first_name: "Cynthia",
    age: 27,
    friends: 16,
    interests: 49,
    image: image2
  },
  {
    id: 3,
    first_name: "Maria",
    age: 29,
    friends: 2,
    interests: 39,
    image: image3
  },
  {
    id: 4,
    first_name: "Jessica",
    age: 20,
    friends: 18,
    interests: 50,
    image: image4
  },
  {
    id: 5,
    first_name: "Julie",
    age: 28,
    friends: 2,
    interests: 13,
    image: image5
  },
  {
    id: 6,
    first_name: "Anna",
    age: 24,
    friends: 12,
    interests: 44,
    image: image6
  }
];
export default class HomeSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Cards,
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cardIndex: 0
    };
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={card.image}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.description}>
          <View style={styles.nameAgeContainer}>
            <Text style={styles.name}>{card.first_name}, </Text>
            <Text style={styles.age}>{card.age}</Text>
          </View>
          <View>
            <Text style={styles.occupation}>{card.occupation}</Text>
            <Text style={styles.selfDescription}>{card.selfDescription} </Text>
          </View>

          <View style={styles.iconsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.swipeLeft()}
            >
              <Icon name="close" size={40} color="#888" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Icon name="textsms" md="md-text" size={40} color="#888" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.swipeRight()}
            >
              <Iconz
                name="ios-heart-empty"
                md="md-heart"
                size={40}
                color="#888"
                style={{
                  marginTop: 5
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack
      },
      cb
    );
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  swipeRight = () => {
    this.swiper.swipeRight();
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={this.onSwiped}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: "BLEAH",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }
              }
            },
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: "SUPER LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
        >
          <Button onPress={this.swipeLeft} title="Swipe Left" />
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent"
  },
  imageContainer: {
    width: "100%",
    height: "65%"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  nameAgeContainer: {
    flexDirection: "row"
  },
  name: {
    fontSize: 30,
    fontWeight: "300",
    color: "#444",
    marginLeft: "3%"
  },
  age: {
    fontSize: 30,
    fontWeight: "200",
    color: "#444"
  },
  occupation: {
    fontSize: 23,
    fontWeight: "300",
    color: "#444",
    marginLeft: "3%"
  },
  selfDescription: {
    fontSize: 20,
    fontWeight: "200",
    color: "#444",
    marginTop: "5%",
    textAlign: "center"
  },
  description: {
    width: "100%",
    height: "35%",
    flexDirection: "column"
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "40%"
  },
  buttons: {
    width: 60,
    height: 60,
    borderWidth: 6,
    borderColor: "#e7e7e7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40
  }
});

module.exports = HomeSecond;
