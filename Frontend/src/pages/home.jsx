import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import '../styles/home-style.css'

export default function Home() {
    const [planets, setPlanets] = useState([]);

    const navigate = useNavigate();

    return (
        <div className="home-body">
            
        </div>
    )
}