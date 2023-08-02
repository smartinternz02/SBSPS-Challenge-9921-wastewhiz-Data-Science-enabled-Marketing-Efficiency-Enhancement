import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

import "./Home.css"

const linkStyle = {
    margin: "5% 5%",
    textDecoration: "none"
};

const Home = () => {
    return (
        <React.Fragment>
            <h1 className="home-title">WasteWhiz: Market Analytics Tool!</h1>
            <div className="home">
                <Link to="http://localhost:8000/api/dashboard" style={linkStyle}>
                    <HomeButton
                        type = "analytics"
                        text = "Analytics"
                    />
                </Link>
                <Link to="http://localhost:8000/api/dashboard" style={linkStyle}>
                    <HomeButton 
                        type = "customers"
                        text = "Un-Turned Customers"
                    />
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Home;