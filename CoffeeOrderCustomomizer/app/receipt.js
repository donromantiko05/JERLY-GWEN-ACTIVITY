import React from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Receipt() {

  // Receive the coffeeCount from the order screen
  const { coffeeCount } = useLocalSearchParams();

  // Convert the parameter to a number
  const cups = Number(coffeeCount);

  // Each cup costs ₱150
  const totalBill = cups * 150;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.receipt}>

          {/* Receipt Header */}

          <View style={styles.receiptHeader}>

            <View>
              <Text style={styles.shopName}>
                CAMPUS COFFEE
              </Text>

              <Text style={styles.receiptTitle}>
                Order Receipt
              </Text>
            </View>

            <Text style={styles.icon}>
              ☕
            </Text>

          </View>

          <View style={styles.line} />

          {/* Order Details */}

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Item
            </Text>

            <Text style={styles.value}>
              Coffee
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Quantity
            </Text>

            <Text style={styles.value}>
              {cups} cup{cups > 1 ? "s" : ""}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>
              Price per cup
            </Text>

            <Text style={styles.value}>
              ₱150
            </Text>
          </View>

          <View style={styles.line} />

          {/* Total */}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>
              TOTAL BILL
            </Text>

            <Text style={styles.total}>
              ₱{totalBill}
            </Text>
          </View>

          {/* Message */}

          <View style={styles.messageBox}>
            <Text style={styles.message}>
              Thanks for ordering!
            </Text>

            <Text style={styles.messageSmall}>
              Enjoy your coffee break ☕
            </Text>
          </View>

        </View>

        <Text style={styles.footer}>
          Campus Coffee 
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
    justifyContent: "center",
    padding: 22,
  },

  receipt: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 25,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.09,
    shadowRadius: 9,
  },

  receiptHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shopName: {
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#8A7567",
  },

  receiptTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#2C211B",
    marginTop: 5,
  },

  icon: {
    fontSize: 38,
  },

  line: {
    height: 1,
    backgroundColor: "#E7E0DA",
    marginVertical: 22,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: "#8A7A70",
  },

  value: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2C211B",
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    fontSize: 14,
    fontWeight: "900",
    color: "#2C211B",
  },

  total: {
    fontSize: 29,
    fontWeight: "900",
    color: "#2C211B",
  },

  messageBox: {
    backgroundColor: "#cab29b",
    borderRadius: 14,
    padding: 15,
    alignItems: "center",
    marginTop: 25,
  },

  message: {
    fontSize: 20,
    fontWeight: "800",
    color: "#5e4538",
  },

  messageSmall: {
    fontSize: 14,
    color: "#635145",
    marginTop: 4,
  },

  footer: {
    textAlign: "center",
    color: "#9A8B81",
    fontSize: 14,
    marginTop: 20,
  },
});