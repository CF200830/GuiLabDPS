import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/Product";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({
          ...action.payload,
        });
      }
    },

    // Elimina el producto completo sin importar su cantidad
    removeFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },

    // Resta 1 unidad; si llega a 0, lo elimina del carrito
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },

    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
