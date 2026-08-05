import React from 'react'

import { NavLink } from "react-router-dom";
import { ChefHat, Heart } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-orange-500 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-white text-2xl font-bold"
                >
                    <ChefHat size={30} />
                    <span>Recipe Finder</span>
                </NavLink>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium transition ${isActive
                                ? "text-white border-b-2 border-white"
                                : "text-orange-100 hover:text-white"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `flex items-center gap-1 font-medium transition ${isActive
                                ? "text-white border-b-2 border-white"
                                : "text-orange-100 hover:text-white"
                            }`
                        }
                    >
                        <Heart size={18} />
                        Favorites
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;