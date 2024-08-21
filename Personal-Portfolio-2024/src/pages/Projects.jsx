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
                    Kiko is a <span style={{ color: "var(--primary-text)" }}>full MERN stack events based mobile web app</span> showcasing proficiency in building full stack applications inclusive of self made and 3rd party API’s, secure authentication, a deep understanding of React and a comprehensive understanding of end-to-end full stack web development.
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
                            src="/Express.png"
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
                    Moment is a <span style={{ color: "var(--primary-text)" }}>Group focused instant messaging application</span> that aims to replicate the dynamics of face to face snap conversations. Messages disappear after a few seconds and say 'goodbye' to endless catch up scrolling. This was another full MERN stack application that allowed me to explore and implement new technologies.
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
                            src="/Express.png"
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
                    Toon Finder is a <span style={{ color: "var(--primary-text)" }}>full MERN stack game</span> where users try to find and tag cartoon characters in a picture as quick as possible. This project pulled upon a wide range of JavaScript knowledge to complete and was one of three final full stack projects set by the Odin Project.
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
                            src="/Express.png"
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
                        49-Letters
                    </div>
                    <img src="/Keyboard.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/49-LETTERS', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://49-letters.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    49-Letters is a <span style={{ color: "var(--primary-text)" }}>word puzzle game</span> where users need to type 49 letters in a row, comprised of real words. The longer the words, the more points you score.  However, some of the letters are pre-filled making it challanging to find words that fit around those letters. Users can post their scores and plug. Give it a go! The paths to completion are unlimited!
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
                            src="/Express.png"
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
                        File-Uploader
                    </div>
                    <img src="/Cloud.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/File-Uploader', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://file-uploader-999.adaptable.app/login', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    File-Uploader is a <span style={{ color: "var(--primary-text)" }}>cloud storage site</span> built entirely within Express using EJS as the view engine. Showcasing capabilities in building API’s, working with 3rd party API’s, learning and implementing new languages and technologies such as SQL and Prisma.
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
                            src="/Nodejs.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Express.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/EJS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/PSQL.png"
                        ></img>

                        <img
                            className="Project-tech-icon"
                            src="/Prisma2.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Clueless
                    </div>
                    <img src="/ABC.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/cluelessv1', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://cluelessv1.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Clueless is a <span style={{ color: "var(--primary-text)" }}>another word puzzle game</span> where users have to try to guess the secret word by inputting random words. If the users input shares a letter in the secret word, the word will appear green else it will appear red, allowing the user to eventually narrow down the letters in the word.  Give it a try!
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

            <div className="Project-container">
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
                    Console.blog is a developer focused <span style={{ color: "var(--primary-text)" }}>blog posting site</span> where users can blog and converse in comment sections. This project showcases the implementation of a full JAM stack with a focus on restful API development and access tokens.
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
                    Infinitune is a front end application mimicking an <span style={{ color: "var(--primary-text)" }}>online store</span> built in React that focuses on showcasing the use of 3rd party API's. Inspired by Spotify, I designed a shop to browse and buy music. This project showcases a mastery of front-end development.
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

            <div className="Project-container">
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
                    Jokes on u is an <span style={{ color: "var(--primary-text)" }}>express built web app</span> where users can post jokes but must become a VIP member to see the joke set-ups. This project showcases the implementation of authentication, API security and node proficiency as-well as the use of No SQL DB MongoDB using EJS as the view engine.
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

            <div className="Project-container-reverse">
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
                    Hidden GPT uses the Google Gemini API to <span style={{ color: "var(--primary-text)" }}>communicate with Googles LLM</span> under the covert ruse of a phoney Outlook help page. This site showcases nothing more than 3rd party API implementation and my first site with an actual user.
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

            <div className="Project-container">
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
                    Catch Em All was my first fully front end focused web app. Its <span style={{ color: "var(--primary-text)" }}>a simple memory game</span> designed to showcase the implementation of a large scope of the React framework.
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