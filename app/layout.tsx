import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <span className="logo">✓</span>
          <span>ReadingList</span>
          {/* TODO (Task 2 - layout navigation): add three links inside this header:
                <a href="/">Books</a>
                <a href="/reading">Reading now</a>
                <a href="/about">About</a>
              They must sit in this shared layout, so every page shows them. */}
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
