import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { setSearch } from '../../features/filter/filterSlice';

const Navbar = () => {

    const isHome = useMatch('/');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [selectSearch, setSelectSearch] = useState("");

    //function to handle search
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            dispatch(setSearch(selectSearch));
            !isHome && navigate('/');
        }
    };

    return (
        <nav className="container relative py-3">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={logo} alt="LWS Logo" />
                </Link>
                <div className="flex-1 max-w-xs search-field group">
                    <i
                        className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"
                    ></i>
                    <input
                        type="text"
                        placeholder="Search Job"
                        className="search-input"
                        id="lws-searchJob"
                        value={selectSearch}
                        onKeyUp={handleSearch}
                        onChange={(e) => setSelectSearch(e.target.value)}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;