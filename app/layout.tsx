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
          {/* TODO (Task 3 - navigation links): at the top of this file, add: import Link from "next/link";
                Then add three Link elements inside this header, written as <Link href="...">Label</Link>:
                Home → /
                Books → /books
                About → /about
              They sit in this shared layout, so every page shows them. */}
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
