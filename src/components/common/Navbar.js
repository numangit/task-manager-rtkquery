import React from 'react';

const Navbar = () => {
    return (
        <nav class="container relative py-3">
            <div class="flex items-center justify-between">
                <a href="./index.html">
                    <img src="./images/logo.svg" alt="LWS Logo" />
                </a>
                {/* <!-- There are nothing to do with the search in add or edit task page, but kept for looking good --> */}
                <div class="flex-1 max-w-xs search-field group">
                    <i
                        class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"
                    ></i>
                    <input
                        type="text"
                        placeholder="Search Job"
                        class="search-input"
                        id="lws-searchJob"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;