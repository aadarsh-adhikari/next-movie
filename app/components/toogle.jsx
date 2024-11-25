"use client"
import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { ImCross } from 'react-icons/im';

const MenuToggle = ({ setMenuState }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => {
      const newState = !prev;
      setMenuState(newState); // Update the parent state
      return newState;
    });
  };

  return (
    <button onClick={handleToggle} className="focus:outline-none ">
      {isMenuOpen ? (
        <ImCross className="text-white text-2xl" />
      ) : (
        <MdMenu className="text-white text-3xl" />
      )}
    </button>
  );
};

export default MenuToggle;
