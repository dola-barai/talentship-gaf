import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import AboutPage from "../AboutPage/AboutPage";

function RouteApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} /> */  
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default RouteApp;