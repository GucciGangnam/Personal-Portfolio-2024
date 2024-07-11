// IMPORTS
// React
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
// Styles
import "./NavbarMobile.css";

// COMPONENT
export const NavbarMobile = ({ isNavOpen, setIsNavOpen, toggleTheme, isDarkMode, currentPage, setCurrentPage }) => {



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
                    {isNavOpen ? "Close" : currentPage}
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
                            strokeWidth="2.0" />
                        <g id="SVGRepo_iconCarrier"> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
                            stroke="var(--primary-text)"
                            strokeWidth="1.5"
                            strokeLinecap="round" />
                            <path d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                                stroke="var(--primary-text)"
                                strokeWidth="1.5"
                                strokeLinecap="round" /> </g>
                    </svg>
                    <div className="Nav-BTN-name">
                        Home
                    </div>
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
                                strokeWidth="1.5"
                                strokeLinecap="round" />
                            <path
                                d="M16 8H15M12 8H8"
                                stroke="var(--primary-text)"
                                strokeWidth="1.5"
                                strokeLinecap="round" />
                            <path
                                d="M8 16H13"
                                stroke="var(--primary-text)"
                                strokeWidth="1.5"
                                strokeLinecap="round" />
                            <path
                                d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C20.4816 3.82476 20.7706 4.69989 20.8985 6M21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3.51839 20.1752 3.22937 19.3001 3.10149 18"
                                stroke="var(--primary-text)"
                                strokeWidth="1.5"
                                strokeLinecap="round" /> </g>
                    </svg>
                    <div className="Nav-BTN-name">
                        CV
                    </div>
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
                    <div className="Nav-BTN-name">
                        Projects
                    </div>
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
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round" /> </g>
                    </svg>
                    <div className="Nav-BTN-name">
                        Contact
                    </div>
                </div>
            </div>

            <div className="Nav-bottom">
                {isDarkMode ? (
                    <svg
                        onClick={toggleTheme}
                        width="30px"
                        height="30px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier"
                            strokeWidth="0" />
                        <g id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                fill="#3f3f3f" /> </g>
                    </svg>
                ) :
                    (
                        <svg
                            onClick={toggleTheme}
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier"
                                strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                                    fill="#9b9b9b" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
                                    fill="#9b9b9b" /> </g>
                        </svg>
                    )}
            </div>
        </div>
    );
};