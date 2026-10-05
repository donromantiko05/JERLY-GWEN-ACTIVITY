import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { Link } from "expo-router";

export default function Index() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  const addCup = () => {
    setCoffeeCount(coffeeCount + 1);
  };

  const removeCup = () => {
    if (coffeeCount > 1) {
      setCoffeeCount(coffeeCount - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>
              CAMPUS COFFEE
            </Text>

            <Text style={styles.heading}>
              Your Coffee Run
            </Text>
          </View>

          <View style={styles.coffeeIconBox}>
            <Text style={styles.coffeeIcon}>
              ☕︎ྀི
            </Text>
          </View>
        </View>

        <Text style={styles.description}>
          Choose how many cups you want
          for your coffee break.
        </Text>

        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Coffee Order
          </Text>

          <View style={styles.divider} />

          <Text style={styles.cupLabel}>
            Cups of Coffee
          </Text>

          <View style={styles.counter}>

            <TouchableOpacity
              style={styles.circleButton}
              onPress={removeCup}
              activeOpacity={0.7}
            >
              <Text style={styles.minus}>
                −
              </Text>
            </TouchableOpacity>

            <View style={styles.numberBox}>
              <Text style={styles.number}>
                {coffeeCount}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.circleButton}
              onPress={addCup}
              activeOpacity={0.7}
            >
              <Text style={styles.plus}>
                +
              </Text>
            </TouchableOpacity>

          </View>

          <Text style={styles.helperText}>
            Minimum order: 1 cup
          </Text>

        </View>

        <View style={styles.priceCard}>

          <View>
            <Text style={styles.priceLabel}>
              Price per cup
            </Text>

            <Text style={styles.price}>
              ₱150
            </Text>
          </View>

          <View style={styles.totalPreview}>
            <Text style={styles.priceLabel}>
              Estimated total
            </Text>

            <Text style={styles.total}>
              ₱{coffeeCount * 150}
            </Text>
          </View>

        </View>

        <View style={styles.receiptWrapper}>
          <Link 
            href={{ 
              pathname: "/receipt", 
              params: { 
                coffeeCount: coffeeCount, 
              }, 
            }} 
            style={styles.receiptButton} 
          >
            VIEW RECEIPT →
          </Link>
        </View>

        <Text style={styles.footer}>
           Coffee is best enjoyed with friends. Share your order and invite them to join you for a coffee break!
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F1ED",
  },

  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 25,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#8A7567",
  },

  heading: {
    fontSize: 29,
    fontWeight: "900",
    color: "#2C211B",
    marginTop: 5,
  },

  coffeeIconBox: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#8c6c5b55",
    justifyContent: "center",
    alignItems: "center",
  },

  coffeeIcon: {
    fontSize: 28,
  },

  description: {
    fontSize: 14,
    lineHeight: 21,
    color: "#75665D",
    marginTop: 12,
    marginBottom: 28,
    width: "85%",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#2C211B",
  },

  divider: {
    height: 1,
    backgroundColor: "#E8E2DD",
    marginVertical: 18,
  },

  cupLabel: {
    textAlign: "center",
    fontSize: 15,
    color: "#75665D",
  },

  counter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E7DED7",
    justifyContent: "center",
    alignItems: "center",
  },

  minus: {
    fontSize: 28,
    color: "#2C211B",
    marginTop: -3,
  },

  plus: {
    fontSize: 27,
    color: "#2C211B",
    marginTop: -2,
  },

  numberBox: {
    width: 85,
    alignItems: "center",
  },

  number: {
    fontSize: 42,
    fontWeight: "900",
    color: "#2C211B",
  },

  helperText: {
    textAlign: "center",
    fontSize: 12,
    color: "#9A8B81",
    marginTop: 12,
  },

  priceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DED3CA",
    borderRadius: 18,
    padding: 18,
    marginTop: 16,
  },

  priceLabel: {
    fontSize: 11,
    color: "#75665D",
    marginBottom: 4,
  },

  price: {
    fontSize: 17,
    fontWeight: "800",
    color: "#2C211B",
  },

  totalPreview: {
    alignItems: "flex-end",
  },

  total: {
    fontSize: 22,
    fontWeight: "900",
    color: "#2C211B",
  },

  receiptWrapper: {
    width: "100%",
    marginTop: 22,
  },

  receiptButton: {
    width: "100%",
    backgroundColor: "#9a7b6c",
    borderRadius: 16,
    paddingVertical: 17,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 2,
  },

  footer: {
    textAlign: "center",
    fontSize: 11,
    color: "#9A8B81",
    marginTop: 18,
  },
});