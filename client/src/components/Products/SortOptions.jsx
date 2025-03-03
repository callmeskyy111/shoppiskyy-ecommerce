import React from "react";
import { useSearchParams } from "react-router-dom";

function SortOptions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams); // Update the URL with the new sorting parameter.
  };
  return (
    <div className="mb-4 flex items-center justify-center">
      <select
        id="sort"
        className="border p-2 rounded-md focus:outline-none"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}>
        <option value="">Default</option>
        <option value="priceAsc">Price: Low - High</option>
        <option value="priceDesc">Price: High - Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}

export default SortOptions;
