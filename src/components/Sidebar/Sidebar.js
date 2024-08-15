import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/assets/images/logo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/beds">Bed Management</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/users">User Management</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
