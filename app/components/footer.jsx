import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-700 h-fit text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-md">
         Made by <Link href={"https://aadarshadhikari.com.np"} target="blank"><span className="text-orange-400 hover:text-orange-200">Aadarsh Adhikari</span></Link>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
