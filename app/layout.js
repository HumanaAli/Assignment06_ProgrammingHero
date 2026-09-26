import "./globals.css";
import Navbar from "../components/Navbar";
import { PlanProvider } from "../context/PlanContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "FitLog",
  description: "Workout Library and Workout Planning Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <PlanProvider>
          <Navbar />
          {children}
          <ToastContainer
            position="top-right"
            theme="dark"
            autoClose={2000}
          />
        </PlanProvider>
      </body>
    </html>
  );
}