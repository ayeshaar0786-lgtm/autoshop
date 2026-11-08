import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Auto Shop | Cars, Bikes and Services",
  description: "Browse vehicles and book automotive services at Auto Shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}