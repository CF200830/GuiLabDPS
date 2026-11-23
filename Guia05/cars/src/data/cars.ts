import { Car } from "../types/Car";

export const CARS: Car[] = [
  {
    id: "1",
    brand: "Toyota",
    model: "Corolla",
    year: 2024,
    price: "$25,000",
    image: require("../assets/imgs/toyota.jpg")
  },
  {
    id: "2",
    brand: "Mazda",
    model: "CX-5",
    year: 2024,
    price: "$32,000",
    image: require("../assets/imgs/mazda.jpg")
  },
  {
    id: "3",
    brand: "Mitsubishi",
    model: "Outlander",
    year: 2024,
    price: "$35,000",
    image: require("../assets/imgs/mitsubishi.jpeg")
  }
];
