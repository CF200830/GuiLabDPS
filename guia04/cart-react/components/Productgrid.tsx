"use client";

import { useState } from "react";
import { books } from "../data/books";
import { addToCart } from "../redux/cartSlice";
import { useAppDispatch } from "../redux/hooks";
import { Product } from "../types/Product";
import SearchBar from "./SearchBar";

import "../styles/product-grid.css";

export default function ProductGrid() {
  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<Product | null>(null);
  const dispatch = useAppDispatch();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />

      <div className="product-grid">
        {filteredBooks.length === 0 ? (
          <p>No se encontraron libros con "{search}"</p>
        ) : (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="product-card"
              onClick={() => setSelectedBook(book)}
              style={{ cursor: "pointer" }}
            >
              <img src={book.image} alt={book.title} />

              <div className="product-info">
                <h3 className="product-title">{book.title}</h3>

                <p className="product-price">${book.price}</p>

                <button
                  className="add-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que se abra el modal al dar clic en el botón
                    dispatch(addToCart(book));
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL CON EL RESUMEN DEL LIBRO */}
      {selectedBook && (
        <div
          className="book-modal-overlay"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="book-modal-content"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro de la tarjeta
          >
            <button
              className="book-modal-close"
              onClick={() => setSelectedBook(null)}
            >
              ✕
            </button>

            <div className="book-modal-body">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="book-modal-image"
              />

              <div className="book-modal-details">
                <h2>{selectedBook.title}</h2>
                <p className="book-modal-price">${selectedBook.price}</p>
                <p className="book-modal-summary">
                  {selectedBook.summary || "Sin resumen disponible."}
                </p>

                <button
                  className="add-button"
                  onClick={() => {
                    dispatch(addToCart(selectedBook));
                    setSelectedBook(null);
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
