"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type == "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="searching anime..."
        className="w-full p-4 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />

      <button className="absolute top-3 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={30} />
      </button>
    </div>
  );
};

export default InputSearch;
