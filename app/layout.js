import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "FitLog",
  description: "Workout Library and Workout Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}