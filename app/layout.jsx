import "./globals.css";
import Nav from './components/nav';
import Footer from './components/footer';
export const metadata = {
  title: "Aadarsh Adhikari",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 ">
      <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
