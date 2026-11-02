"use client";

import { useState } from "react";
import { Book, Status, seedBooks } from "../lib/books";
import BookCard from "../components/BookCard";

// Counter used to give each new book a unique id. (Already done - do not change.)
let nextId = 4;

export default function HomePage() {
  // TODO (Task 5a - useState): keep the list of books in state, starting from seedBooks,
  // so the screen updates when a book is added. Replace this line with:
  //   const [books, setBooks] = useState<Book[]>(seedBooks);
  const books: Book[] = seedBooks;

  // TODO (Task 5b - useState): keep the text typed in the box in state.
  // Replace this line with:
  //   const [title, setTitle] = useState("");
  const title = "";

  return (
    <section>
      <h1>ReadingList</h1>
      <p className="muted">{books.length} books</p>

      {/* TODO (Task 5c - form submit): replace the empty handler below. When submitted:
            1. call e.preventDefault() so the page does not reload
            2. if title.trim() is an empty string, just return
            3. build a new book:
                 { id: nextId++, title: title.trim(), author: "Unknown", status: Status.Unread }
               and add it with:  setBooks([...books, newBook])
            4. clear the box with:  setTitle("")  */}
      <form className="add-form" onSubmit={(e) => {}}>
        {/* TODO (Task 5d - controlled input): add two attributes to this input:
               value={title}
               onChange={(e) => setTitle(e.target.value)} */}
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
