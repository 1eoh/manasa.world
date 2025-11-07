// /app/layout.js
import "./globals.css";

export const metadata = {
  title: "Manasa Portfolio",
  description: "Portfolio of Manasa Reddy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
