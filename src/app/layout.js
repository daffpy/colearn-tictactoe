
import "./globals.css";


export const metadata = {
  title: "Tic Tac Toe",
  description: "a project for CoLearn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
