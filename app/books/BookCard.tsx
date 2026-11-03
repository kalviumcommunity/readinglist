import { Book } from "./data";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <li className={book.status === "Finished" ? "task done" : "task"}>
      <span className="badge">{book.status}</span>
      <span className="title">{book.title}</span>
      <span>{book.author}</span>
    </li>
  );
}
