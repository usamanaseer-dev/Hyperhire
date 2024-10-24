"use client";
import Logo from "@/assets/logo";
import React, { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle menu on mobile
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

        {/* Center: Links */}
        {/* Hidden on mobile by default */}
        <nav className={`hidden md:flex space-x-6 text-sm`}>
          <a href="#" className="hover:text-orange-500">
            워크센터
          </a>
          <a href="#" className="hover:text-orange-500">
            손비서
          </a>
          <a href="#" className="hover:text-orange-500">
            메타휴먼
          </a>
          <a href="#" className="hover:text-orange-500">
            영상제작소
          </a>
          <a href="#" className="hover:text-orange-500">
            제휴문의
          </a>
          <a href="#" className="hover:text-orange-500">
            공지사항
          </a>
        </nav>

        {/* Right: Login & Language Selector */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-orange-500">
            로그인
          </a>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 focus:outline-none hover:text-orange-500"
              onClick={toggleDropdown}
            >
              {/* Globe Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm0 0v18m0-18a8.964 8.964 0 00-5 1.675M3 9c0 1.658.335 3.234.925 4.675M3 9h18M21 9a8.964 8.964 0 01-5 1.675"
                />
              </svg>

              {/* Down arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  한국어
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  English
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu (Only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block hover:text-orange-500">
            워크센터
          </a>
          <a href="#" className="block hover:text-orange-500">
            손비서
          </a>
          <a href="#" className="block hover:text-orange-500">
            메타휴먼
          </a>
          <a href="#" className="block hover:text-orange-500">
            영상제작소
          </a>
          <a href="#" className="block hover:text-orange-500">
            제휴문의
          </a>
          <a href="#" className="block hover:text-orange-500">
            공지사항
          </a>
          <a href="#" className="block hover:text-orange-500">
            로그인
          </a>
        </div>
      )}
    </header>
  );
}
