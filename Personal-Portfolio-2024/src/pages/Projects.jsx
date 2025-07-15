// IMPORTS 
// React 
import { useState, useEffect, useRef } from "react"
// Styles 
import "./Projects.css"


//COMPONENT 
export const Projects = () => {

    //POPUP
    // State
    const [isPopupShowing, setIsPopupShowing] = useState(true)
    // Hanlder
    const hidePopup = () => {
        setIsPopupShowing(false)
    }


    return (
        <div className="Projects">
            {isPopupShowing && (
                <div className="Overlay">
                    <div className="Popup">
                        <h1>Attention</h1>
                        {/* <p>My backend hosting provider has recently removed my prefered tier and can no longer supprt my projects. Please bear with me while I look into alternative solutions.</p>
                        <p>Feel free to still view the code of each project with screenshots included in the README files.</p> */}
                        <p>Web developemt is my hobby and I've built many projects with the goal of developing my skills. </p>
                        <p>All of these projects are hosted on free tiers across multiple platforms with limited lifespans and therefore may not be live.</p>
                        <p>Feel free to still view the code of each project with screenshots included in the README files.</p>
                        <p><strong>Alex - 27/05/25</strong></p>
                        <button onClick={hidePopup} className="Attention-Button">OK</button>
                    </div>
                </div>
            )}
            <div className="Top-margin">
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Local Post 3000
                    </div>
                    <img src="/Mailbox.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/localpost3000', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://localpost3000.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    LocalPost is a <span style={{ color: "var(--primary-text)" }}>Full Stack NextJS social media site</span> which utilises a users location to show them a unique feed of posts from their local area. This project showcases a deep understanding of NextJS, Typescript, and the use of 4rd party component and authentication libraries.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/typescript.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/Tailwind.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/NextJS.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/PSQL.png"
                        ></img>
                        <img
                            className="Project-tech-icon"
                            src="/PSQL.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container">
                <div className="Project-graphics">
                    <div className="Project-title">
                        TS To-Do
                    </div>
                    <img src="/typescript.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/TS-Todo', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://ts-todo-amuk.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    TS To-Do is a <span style={{ color: "var(--primary-text)" }}>full PERN stack task manager</span> showcasing confidence in developing with Typescript in both frontend and backend frameworks. SQL DB dvelopment, testing and migration. Redux to manage state and enable optomistic updates to provide a smooth UX.
                    <div className="Project-Technology">
                        <img
                            className="Project-tech-icon"
                            src="/typescript.png"
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
                            src="/PSQL.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container-reverse">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Imposterble (PWA)
                    </div>
                    <img src="/Spy.png" className="Project-image">
                    </img>
                    <div className="Project-buttons">
                        <button
                            onClick={() => window.open('https://github.com/GucciGangnam/Imposterble', '_blank')}
                            className="Code-BTN">code</button>
                        <button
                            onClick={() => window.open('https://imposterble.vercel.app', '_blank')}
                            className="Live-BTN">Live</button>
                    </div>
                </div>
                <div className="Project-description">
                    Imposterble is a <span style={{ color: "var(--primary-text)" }}>real-time multiple player game</span> showcasing proficiency in building real-time multiplayer games using React, Express, and Socket.io for game state management. As far as I'm aware, its the world first free real-time version of this game.
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
                            src="/Socket.png"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="Project-container">
                <div className="Project-graphics">
                    <div className="Project-title">
                        Kiko (PWA)
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
                        Moment
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
                    Moment is a <span style={{ color: "var(--primary-text)" }}>Group focused instant messaging application</span> that aims to replicate the dynamics of face to face snap conversations. This project showcases a deep understanding of the React framework as well as backend technologies inluding secure authentication, web sockets etc...
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