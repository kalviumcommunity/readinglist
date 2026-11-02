import { Book, Status } from "../lib/books";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <li className={book.status === Status.Finished ? "task done" : "task"}>
      <span className="badge">{book.status}</span>
      <span className="title">{book.title}</span>
      <span>{book.author}</span>
    </li>
  );
}
