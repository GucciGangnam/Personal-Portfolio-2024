// IMPORTS
// React
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
// Styles
import "./NavbarMobile.css";

// COMPONENT
export const NavbarMobile = ({ isNavOpen, setIsNavOpen, toggleTheme, setCurrentPage }) => {



    // HANDLE OPEN / CLOSE NAV
    const handleToggleNav = () => {
        setIsNavOpen((prevState) => !prevState);
    };



    return (
        <div
            className="NavbarMobile"
            style={{
                height: isNavOpen ? "calc(100vh - 40px)" : "45px",
            }}
        >
            <div className="Nav-top">
                <div className="Nav-name">Alex Micklewright</div>
                <button
                    className={isNavOpen ? "Nav-toggle-BTN-open" : "Nav-toggle-BTN-closed"}
                    onClick={handleToggleNav}>
                    {isNavOpen ? "Close" : "Menu"}
                </button>
            </div>

            <div
                className="Nav-main"
                style={{
                    opacity: isNavOpen ? '1' : '0',
                }}>

                <div
                    onClick={() => {
                        setCurrentPage("Home");
                        handleToggleNav()
                    }}
                    className="Nav-BTN">
                    <svg
                        width="90px"
                        height="90px"
                        viewBox="-1.0 -1.0 28.80 28.80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                        transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                        <g id="SVGRepo_bgCarrier"
                            strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#CCCCCC"
                            strokeWidth="0.336" />
                        <g id="SVGRepo_iconCarrier"> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                            stroke="var(--primary-text)"
                            strokeWidth="1.0"
                            strokeLinecap="round" />
                            <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                stroke="var(--primary-text)"
                                strokeWidth="1.0"
                                strokeLinecap="round" /> </g>
                    </svg>
                </div>

                <div
                    onClick={() => {
                        setCurrentPage("CV");
                        handleToggleNav()
                    }}
                    className="Nav-BTN">
                    <svg
                        width="90px"
                        height="90px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g
                            id="SVGRepo_bgCarrier"
                            strokeWidth="0" />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                        <g
                            id="SVGRepo_iconCarrier">
                            <path
                                d="M8 12H9M16 12H12"
                                stroke="var(--primary-text)"
                                strokeWidth="1.0"
                                strokeLinecap="round" />
                            <path
                                d="M16 8H15M12 8H8"
                                stroke="var(--primary-text)"
                                strokeWidth="1.0"
                                strokeLinecap="round" />
                            <path
                                d="M8 16H13"
                                stroke="var(--primary-text)"
                                strokeWidth="1.0"
                                strokeLinecap="round" />
                            <path
                                d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
                                stroke="var(--primary-text)"
                                strokeWidth="1.0"
                                strokeLinecap="round" /> </g>
                    </svg>
                </div>

                <div
                    onClick={() => {
                        setCurrentPage("Projects");
                        handleToggleNav()
                    }}
                    className="Nav-BTN">
                    <svg fill="var(--primary-text)"
                        width="90px"
                        height="90px"
                        viewBox="0 0 36 36"
                        version="1.1"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg">
                        <g
                            id="SVGRepo_bgCarrier"
                            strokeWidth="0" />
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                        <g
                            id="SVGRepo_iconCarrier">
                            <title>blocks-group-line</title>
                            <path
                                d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76Zm-2.81.91L25.61,22,20.5,19.67l5.11-2.35ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8ZM11.6,15.57h0V8l6.08,2.8a1,1,0,0,0,.84,0L24.6,8v7.58h0l-6.5,3ZM32.11,28.81l-6.5,3-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8Z"
                                className="clr-i-outline clr-i-outline-path-1" />
                            <rect x="0" y="0" width="36" height="36"
                                fillOpacity="0" /> </g>
                    </svg>
                </div>

                <div
                    onClick={() => {
                        setCurrentPage("Contact");
                        handleToggleNav()
                    }}
                    className="Nav-BTN">
                    <svg width="90px" height="90px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier"> <path d="M10 9H17M10 13H17M7 9H7.01M7 13H7.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
                            stroke="var(--primary-text)"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round" /> </g>
                    </svg>
                </div>
            </div>

            <div className="Nav-bottom">
                <button
                    onClick={toggleTheme}>Theme</button>
            </div>
        </div>
    );
};