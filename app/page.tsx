"use client";

import { useState } from "react";
import { Book, Status, seedBooks } from "../lib/books";
import BookCard from "../components/BookCard";

// Counter used to give each new book a unique id. (Already done - do not change.)
let nextId = 4;

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>(seedBooks);
  const [title, setTitle] = useState("");

  return (
    <section>
      <h1>ReadingList</h1>
      <p className="muted">{books.length} books</p>

      {/* TODO (Task 4a - form submit): replace the empty handler below. When submitted:
            - stop the page from reloading
            - do nothing if the title is empty after removing spaces at the start and end
            - create a new book with id = nextId (then add one to nextId), the trimmed title,
              author "Unknown", and status Status.Unread
            - set books to a new array that holds the old books and the new book, using setBooks
              Hint: [...books, newBook] makes a new array with the old books, then the new book.
            - clear the box, using setTitle */}
      <form className="add-form" onSubmit={(e) => {}}>
        {/* TODO (Task 4b - controlled input): add two attributes to this input:
               - value should come from title
               - onChange should update title from the input's current value */}
        <input className="search" placeholder="Add a book title…" />
        <button type="submit" className="btn">Add</button>
      </form>

      <ul className="task-list">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </ul>
    </section>
  );
}
