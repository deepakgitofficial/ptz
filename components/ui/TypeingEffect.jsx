"use client"
import React, { useState, useEffect } from "react";

const TypingEffect = () => {
    const texts = [
        "Website Banwao, Business Badhao 🚀",
        "Aapke Business Ke Liye Smart Digital Solutions",
        "Professional Websites Jo Customers Le Kar Aaye",
        "Online Growth Ki Perfect Shuruaat",
        "Website Aur Apps, Sab Kuch Ek Hi Jagah",
        "Digital Presence Ko Next Level Par Le Jao"
    ];

    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentText = texts[index];

        let speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            }

            if (!isDeleting && charIndex === currentText.length) {
                setIsDeleting(true);
                speed = 1500;
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts]);

    return (
        <h2 id="textAnimate">
            {displayText}
            <span className="cursor">|</span>
        </h2>
    );
};

export default TypingEffect;