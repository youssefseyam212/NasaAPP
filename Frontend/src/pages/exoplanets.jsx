
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import '../styles/exoplanets-style.css';

export default function Exoplanets() {
    const [planets, setPlanets] = useState([]);

    return (
        <div className="exoplanets-background">
            <h1>Exoplanets List</h1>
            {/* Render planets or other content here */}
        </div>
    );
}
