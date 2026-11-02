// lib/books.ts - the data for ReadingList. This file is plain TypeScript (no React).

// Status is a fixed set of named values.
export enum Status {
  Unread = "Unread",
  Reading = "Reading",
  Finished = "Finished",
}

// A single book on the reading list.
export type Book = {
  id: number;
  title: string;
  author: string;
  status: Status;
};

// Books the list starts with. (Already done - do not change.)
export const seedBooks: Book[] = [
  { id: 1, title: "Dune", author: "Frank Herbert", status: Status.Finished },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas", status: Status.Reading },
  { id: 3, title: "Atomic Habits", author: "James Clear", status: Status.Unread },
];
