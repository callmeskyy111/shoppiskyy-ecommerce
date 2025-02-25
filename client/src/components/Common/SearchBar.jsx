import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleSearchToggle() {
    setIsOpen(!isOpen);
    setSearchTerm("");
  }

  function handleSearch(evt) {
    evt.preventDefault();
    console.log("SearchTerm:", searchTerm);
    setIsOpen(false);
  }

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}>
      {isOpen ? (
        <>
          <form
            className="relative flex items-center justify-center w-full"
            onSubmit={handleSearch}>
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search.."
                value={searchTerm}
                className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded focus:outline-none w-full placeholder:text-gray-700"
                onChange={(evt) => setSearchTerm(evt.target.value)}
              />
              {/* SEARCH ICON */}
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer"
                type="submit">
                <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
              </button>
            </div>
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-4 top-1/2 transform -translate--y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer">
              <HiMiniXMark className="h-6 w-6" />
            </button>
          </form>
        </>
      ) : (
        <>
          <button onClick={() => handleSearchToggle()}>
            <HiMagnifyingGlass className="h-6 w-6 cursor-pointer" />
          </button>
        </>
      )}
    </div>
  );
}

export default SearchBar;
