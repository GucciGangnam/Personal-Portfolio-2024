// IMPORTS 
// React 
import { useState, useEffect, useRef } from "react"
// Styles 
import "./Projects.css"


//COMPONENT 
export const Projects = () => {


    return (
        <div className="Projects">
            <div className="Top-margin">
            </div>

            <div className="Project-container">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Kiko (Mobile)
                    </div>
                    <img src="/Kiko.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Social-App', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://kiko-app.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Kiko is a full stack events based mobile web app that uses our phones to bring people together in real life. Post what you’re up to, choose who can join and let the 6 degrees of separation work its magic! Try it out!
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Nodejs.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Mongo.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Moment (Desktop)
                    </div>
                    <img src="/Message.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Moment-Messaging-App', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://moment-messaging-app.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Moment is a Group focused instant messaging application that aims to replicate the dynamics of face to face snap conversations. Messages disappear after a few seconds and say 'goodbye' to endless catch up scrolling. This was another full MERN stack application that allowed me to explore and implement new technologies.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Nodejs.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Mongo.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Socket.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Toon Finder
                    </div>
                    <img src="/Search.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/photo-tagging-app', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://photo-tagging-app-mu.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Toon Finder is a full MERN stack game where users try to find and tag cartoon characters in a picture as quick as possible. This project pulled upon a wide range of JavaScript knowledge to complete and was one of three final full stack projects set by the Odin Project.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Nodejs.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Mongo.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Console.blog
                    </div>
                    <img src="/Console.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Console.Blog', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://console-blog-tawny.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Console.blog is a developer focused blog posting site where users can blog and converse in comment sections. This project showcases the implementation of a full JAM stack with a focus on restful API development and access tokens.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Nodejs.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Mongo.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Infinitune
                    </div>
                    <img src="/Spotify.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Infinitune', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://infinitune-shop.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Infinitune is a front end application mimicking an online store that focuses on showcasing the use of 3rd party API's. Inspired by Spotify, I designed a shop to browse and buy music. Unfortunately, the country selector doesn’t seem to be working anymore so I will re-read the documentation at a later date.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Jokes-on-U
                    </div>
                    <img src="/Laugh.png" className="Project-image">

                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Jokes-on-u', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://jokesonu.adaptable.app/home', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Jokes on u is an express built web app where users can post jokes but must become a "VIP" member to see the joke set-ups. This project showcases the implementation of authentication and node proficiency as-well as the use of No SQL DB MongoDB. Although not the prettiest site, the front was built using EJS as the view engine of my express app.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/EJS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Nodejs.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Mongo.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Hidden GPT
                    </div>
                    <img src="/Bot.png" className="Project-image">

                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Hidden-GPT', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://hidden-gpt.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Hidden GPT uses the Google Gemini API to communicate with Googles LLM under the covert ruse of a phoney Outlook help page. This site showcases nothing more than 3rd party API implementation and my first site with an actual user.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Catch-em-all
                    </div>
                    <img src="/Pokemon.png" className="Project-image">

                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Catch-em-all', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://memory-game-2.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Catch Em All was my first fully front end focused web app. Its a simple memory game designed to showcase the implementation of a large scope of the React framework.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/JavaScript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/CSS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/React.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Vite.png"
                        ></img>
                    </div>
                </div>
            </div>
        </div >
    )
}