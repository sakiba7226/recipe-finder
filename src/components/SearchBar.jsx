import React from 'react'

import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, loading, }) => {
    return (
        <div className="flex items-center gap-3 mt-8">
            <input
                type="text"
                placeholder="Search by ingredient..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
                onClick={handleSearch}
                disabled={loading}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 disabled:cursor-not-allowed text-white px-5 py-3 rounded-lg transition"
            >
                <Search size={20} />

                {loading ? "Searching..." : "Search"}
            </button>
        </div>
    );
};

export default SearchBar;