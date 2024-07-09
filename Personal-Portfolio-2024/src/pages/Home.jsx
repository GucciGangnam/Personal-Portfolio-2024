// IMPORTS 
// Styles 
import "./Home.css"



// COMPONENTS 
export const Home = () => {
    return (
        <div className="Home">
            <div className="Top-margin">
                
            </div>
            <div className="Main-section">

                <div className="Home-info">
                    <img
                    className="Avatar"
                    src="/Avatar.png"></img>
                    <div className="Name">
                        Alex Micklewright
                    </div>
                    <div className="Email">
                        developeramuk@gmail.com
                    </div>
                    <div className="Location">
                        Vietnam
                    </div>
                    <div className="Devider"></div>
                    <div className="Info">
                    Welcome to my portfolio! My journey into web development began in 2021 when I discovered a passion for coding, starting with JavaScript. Since then, I have dedicated everyday to learning and building projects, guided by the Odin Project. My portfolio showcases a variety of projects that demonstrate my skills and dedication to web development.
                    </div>
                    <div className="Links">
                        <img
                        onClick={() => window.open('https://github.com/GucciGangnam', '_blank')}
                        src="/GitHub.png"/>
                        <img
                        onClick={() => window.open('https://www.instagram.com/unlimited_cuisine/?hl=en', '_blank')}
                        src="/Instagram.png"/>
                    </div>
                </div>

                <div className="Home-medals">
                <img src="/Html.png"/>
                    <img src="/JavaScript.png"/>
                    <img src="/CSS.png"/>
                    <img src="/Vite.png"/>
                    <img src="/Express.png"/>
                    <img src="/Nodejs.png"/>
                    <img src="/Mongo.png"/>
                    <img src="/Socket.png"/>
                    <img src="/EJS.png"/>
                    <img src="/Pug.png"/>
                    <img src="/Git.png"/>
                </div>

            </div>
        </div>
    )
}