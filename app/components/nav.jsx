"use client"
import { useState } from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import SearchBar from "./search/searchbar";
import MenuToggle from './toogle';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={` flex justify-around flex-row sm:items-center flex-wrap py-5 ${roboto.className} font-medium bg-slate-950`}>
      <Link href={"/"}>
        <header className=" text-xl bg-gradient-to-tl text-transparent bg-clip-text from-violet-600 to-red-500">
          The Flix
        </header>
      </Link>
      <div className="sm:hidden flex flex-col items-end w-[70%]">
  <MenuToggle setMenuState={setIsMenuOpen} />
  <div className="w-[90%] mx-auto flex felx-wrap"> 
    <SearchBar className="w-full" />
  </div> 
</div> 
         
      <div className={`transition-all duration-300 ease-in-out max-sm:w-full max-sm:mt-8 max-sm:${isMenuOpen ? 'block ' : 'hidden'}`}>
        <ul className="flex sm:items-center max-sm:ml-[5%] max-sm:flex-col justify-center text-white sm:space-x-4">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <li className="hover:text-violet-600 transition-colors">{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
     
      {/* Extra elements for larger screens */}
      <div className="flex items-center space-x-4 max-sm:hidden">
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
