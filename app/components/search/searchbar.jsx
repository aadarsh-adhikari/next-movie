'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');

  const search = () => {
    if (keyword.trim()) {
      router.push(`/search?query=${encodeURIComponent(keyword)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-md border-2 border-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
        value={keyword} 
      />
      <button
        className="p-2 bg-red-400 rounded-md text-white hover:bg-red-500 transition duration-300"
        onClick={search}
      >
        <FaSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
