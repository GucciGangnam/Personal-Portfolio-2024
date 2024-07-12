// IMPORTS 
// Styles 
import "./Home.css"



// COMPONENTS 
export const Home = ({ isMobile }) => {
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
                        Hanoi - Vietnam
                    </div>
                    <div className="Devider"></div>
                    <div className="Info">
                    I started learning to code in 2022 along side the Odin Project and have been building projects every day since. My portfolio showcases my journey and the skills I’ve developed. I strive to and succeed in being a top performer in everything I do. I code every single day and I take pictures when I can. Check out both sides of my life here.
                    </div>
                    <div className="Links">
                        <img
                            onClick={() => window.open('https://github.com/GucciGangnam', '_blank')}
                            src="/GitHub.png" />
                        <img
                            onClick={() => window.open('https://www.instagram.com/unlimited_cuisine/?hl=en', '_blank')}
                            src="/Instagram.png" />
                    </div>
                </div>
                {!isMobile && (
                    <div className="Desktop-only">
                        <img
                            style={{
                                width: "100px"
                            }}
                            src="/QRGOOGLE2.png"
                        />
                        <div className="Mobile-prompt">Go mobile</div>
                    </div>
                )}



                <div className="Home-medals">
                    <img src="/Html.png" />
                    <img src="/JavaScript.png" />
                    <img src="/CSS.png" />
                    <img src="/Vite.png" />
                    <img src="/Express.png" />
                    <img src="/Nodejs.png" />
                    <img src="/Mongo.png" />
                    <img src="/Socket.png" />
                    <img src="/EJS.png" />
                    <img src="/Pug.png" />
                    <img src="/Git.png" />
                </div>

            </div>
        </div>
    )
}