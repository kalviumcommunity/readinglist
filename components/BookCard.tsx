import { Book, Status } from "../lib/books";

// TODO (Task 3a - typed props): this component receives ONE book as a prop.
// Define a props type with one field, book, of type Book.
// Use that props type as the type of the parameter below. Do not use any.
//
// TODO (Task 3b - JSX): fill the three empty spots in the returned JSX with the
// book's status, title, and author. In JSX the attribute is className (NOT class),
// and JavaScript goes inside { }.
export default function BookCard({ book }) {
  return (
    <li className={book.status === Status.Finished ? "task done" : "task"}>
      <span className="badge">{/* status here */}</span>
      <span className="title">{/* title here */}</span>
      <span>{/* author here */}</span>
    </li>
  );
}
