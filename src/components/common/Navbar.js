import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container relative py-3">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src="./images/logo.svg" alt="LWS Logo" />
                </Link>
                {/* <!-- There are nothing to do with the search in add or edit task page, but kept for looking good --> */}
                <div className="flex-1 max-w-xs search-field group">
                    <i
                        className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"
                    ></i>
                    <input
                        type="text"
                        placeholder="Search Job"
                        className="search-input"
                        id="lws-searchJob"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;