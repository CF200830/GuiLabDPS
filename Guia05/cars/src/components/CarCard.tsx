import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";

import { Car } from "../types/Car";

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={car.image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {car.brand}
      </Text>

      <Text>
        Modelo: {car.model}
      </Text>

      <Text>
        Año: {car.year}
      </Text>

      <Text style={styles.price}>
        {car.price}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 4
  },

  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 10
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  },

  price: {
    color: "green",
    fontWeight: "bold",
    marginTop: 5
  }
});
