import Link from "next/link";
import { Roboto } from "next/font/google";
import SearchBar from "./search/searchbar";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/toprated", label: "Top Rated" },
  { href: "/about", label: "About" },
];

const Nav = () => {
  return (
    <nav
      className={`flex justify-around items-center flex-wrap py-5 ${roboto.className} font-medium bg-slate-950`}
    >
      <Link href={"/"}>
        <header className=" text-xl bg-gradient-to-tl text-transparent bg-clip-text from-violet-600 to-red-500">
          The Flix
        </header>
      </Link>

      <div className="">
        <ul className="flex items-center justify-center text-white space-x-4">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center  space-x-4">
        <SearchBar />
        <Link href={"https://aadarshadhikari.com.np"} target="_blank" className="md:block hidden">
          <button className="p-2 bg-purple-400 border-2 border-black rounded-md hover:bg-white hover:border-purple-400 transition-all duration-300">
            Developer
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
