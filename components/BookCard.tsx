import { Book, Status } from "../lib/books";

// TODO (Task 4 - typed props): this component receives ONE book as a prop.
// Define a props type and use it on the parameter:
//
//   type BookCardProps = { book: Book };
//   export default function BookCard({ book }: BookCardProps) { ... }
//
// Right now the parameter has no type. Add the type.
//
// TODO (Task 4 - JSX): fill the marked spots inside the returned JSX.
//   - the badge: {book.status}
//   - the title: {book.title}
//   - the author: {book.author}
//   - show "✓ Done" ONLY when book.status is Status.Finished
// Remember: in JSX the attribute is className (NOT class), and JavaScript goes in { }.
export default function BookCard({ book }) {
  return (
    <li className={book.status === Status.Finished ? "task done" : "task"}>
      <span className="badge">{/* status here */}</span>
      <span className="title">{/* title here */}</span>
      <span>{/* author here */}</span>
      {/* show "✓ Done" here only when the book is finished */}
    </li>
  );
}
