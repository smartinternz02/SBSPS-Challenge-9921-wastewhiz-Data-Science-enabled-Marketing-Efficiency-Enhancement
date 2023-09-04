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
                <Link to="https://wastewhiz-api.onrender.com/api/dashboard" style={linkStyle}>
                    <HomeButton
                        type = "analytics"
                        text = "Analytics"
                    />
                </Link>
                <Link to="/customers" style={linkStyle}>
                    <HomeButton 
                        type = "customers"
                        text = "Prediction"
                    />
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Home;