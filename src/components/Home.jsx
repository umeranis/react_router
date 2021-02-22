import React from 'react';
import { NavLink } from 'react-router-dom';
import "./home.css";

const Home = () => {
    return (
        <div>
            <div id="main">
                <ul className="nav">
                    <NavLink className="why" to="/covid">COVID 19</NavLink>
                    <NavLink className="thy" to="/Weather">WEATHER</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Home;