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
                        alex.micklewright7@gmail.com
                    </div>
                    <div className="Location">
                        Leeds - UK
                    </div>
                    <div className="Devider"></div>
                    <div className="Info">
                        I started learning to code in 2021 along side the Odin Project and have been building projects every day since. My portfolio showcases my journey and the skills I’ve developed. I strive to and succeed in being a top performer in everything I do. I code every single day and I take pictures when I can. Check out both sides of my life here.
                    </div>
                    <div className="Links">
                        <img
                            onClick={() => window.open('https://github.com/GucciGangnam', '_blank')}
                            src="/Github.png" />
                        <img
                            onClick={() => window.open('https://www.instagram.com/unlimited_cuisine/?hl=en', '_blank')}
                            src="/Instagram.png" />
                    </div>
                </div>
                {!isMobile && (
                    <div className="Desktop-only">
                        <img
                            src="/SiteQR2.png"
                        />
                        <div className="Mobile-prompt">Go mobile</div>
                    </div>
                )}



                <div className="Home-medals">
                    <img src="/Html.png" alt="HTML" />
                    <img src="/JavaScript.png" alt="JS" />
                    <img src="/typescript.png" alt="JS" />
                    <img src="/CSS.png" alt="CSS" />
                    <img src="/React.png" alt="React" />
                    <img src="/Vite.png" alt="Vite" />
                    <img src="/Express.png" alt="Express" />
                    <img src="/Nodejs.png" alt="Node JS" />
                    <img src="/PSQL.png" alt="PSQL" />
                    <img src="/Prisma2.png" alt="GIT" />
                    <img src="/Mongo.png" alt="MONGODB" />
                    <img src="/Postman.png" alt="Postman" />
                    <img src="/EJS.png" alt="EJS" />
                    <img src="/Pug.png" alt="PUG" />
                    <img src="/Git.png" alt="GIT" />
                    <img src="/JWT.png" alt="JWT" />
                    <img src="/Passport.png" alt="PassportJS" />
                    <img src="/Socket.png" alt="Socket IO" />

                </div>

            </div>
        </div>
    )
}