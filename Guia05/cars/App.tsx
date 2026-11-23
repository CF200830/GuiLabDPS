import React from "react";
import {  FlatList, View
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CarCard from "./src/components/CarCard";
import { CARS } from "./src/data/cars";

export default function App() {

  return (
      <SafeAreaProvider>
            <FlatList
        data={CARS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CarCard car={item} />
        )}
      />
    </SafeAreaProvider>


  );
}
