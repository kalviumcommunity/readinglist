// app/books/data.ts - the data for ReadingList. This file is plain TypeScript (no React).

// Status can only be one of these three exact strings.
export type Status = "Unread" | "Reading" | "Finished";

// A single book on the reading list.
export type Book = {
  id: number;
  title: string;
  author: string;
  status: Status;
};

// Books the list starts with. (Already done - do not change.)
export const seedBooks: Book[] = [
  { id: 1, title: "Dune", author: "Frank Herbert", status: "Finished" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas", status: "Reading" },
  { id: 3, title: "Atomic Habits", author: "James Clear", status: "Unread" },
];
