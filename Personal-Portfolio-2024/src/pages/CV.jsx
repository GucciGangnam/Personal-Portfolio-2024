import React, { useState, useEffect, useRef } from 'react';
import "./CV.css";

export const CV = () => {






    // Scroll
    const scrollableDivRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const handleScroll = () => {
        const scrollTop = scrollableDivRef.current.scrollTop;
        const scrollHeight = scrollableDivRef.current.scrollHeight;
        const clientHeight = scrollableDivRef.current.clientHeight;

        if (scrollTop <= 0) {
            setIsNavVisible(false);  // Hide nav when at the top
        } else if (scrollTop + clientHeight >= scrollHeight) {
            setIsNavVisible(false);  // Hide nav when at the bottom
        } else if (scrollTop > lastScrollTop) {
            setIsNavVisible(true);  // Show nav when scrolling down
        } else {
            setIsNavVisible(false);  // Hide nav when scrolling up
        }
        setLastScrollTop(scrollTop);
    };
    useEffect(() => {
        const scrollableDiv = scrollableDivRef.current;
        scrollableDiv.addEventListener('scroll', handleScroll);
        return () => {
            scrollableDiv.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);
    useEffect(() => {
        const observerOptions = {
            root: scrollableDivRef.current,
            threshold: 0.5
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const page = entry.target.getAttribute('data-page');
                    setActivePage(parseInt(page));
                    console.log(page)
                }
            });
        }, observerOptions);
        const pages = document.querySelectorAll('.Main > div');
        pages.forEach(page => observer.observe(page));
        return () => {
            pages.forEach(page => observer.unobserve(page));
        };
    }, []);





    const [conversation, setConversation] = useState(
        [
            {
                avatar: "/Avatar.png",
                message: ""
            }
        ]
    )


    const page5Text = "Confident in my teaching ability, based on exceptional feedback, I wanted to challenge myself and learn something new.  My admiration for tech and creativity led me to learning Full Stack Web development.  I faced the biggest learning curve of my life trying to self teach, but persisted and eventually found the Odin Project.  The Odin Project is an open sourced, deeply comprehensive curriculum of web development from scratch.  With a solid syllabus to follow, I moved to Ho Chi Minh City and started working part time so I could focus on writing code.";
    const [page5CodeWritten, setPage5CodeWritten] = useState(false)
    const [forcedMessageAvailable, setForcedMessageAvailable] = useState(false)
    const [handedToGPT, setHandToGPT] = useState(false);
    const [dummyInputText, setDummyInputText] = useState("What did you learn?")

    useEffect(() => {
        if (activePage !== 5) {
            return;
        }
        if (page5CodeWritten) {
            return;
        }
        setPage5CodeWritten(true);
        let newString = '';
        const updateString = (i) => {
            if (i < page5Text.length) {
                newString += page5Text[i];
                setConversation(prevState => {
                    const newConversation = [...prevState];
                    newConversation[0].message = newString;
                    return newConversation;
                });
                let randomNumber = Math.floor(Math.random() * 10) + 1;
                if (randomNumber % 5 === 0) {
                    randomNumber *= 5;
                }
                setTimeout(() => updateString(i + 1), randomNumber);
            } else {
                setForcedMessageAvailable(true)
            }
        };
        updateString(0);
    }, [activePage, page5CodeWritten]);


    const handleFakeMessage = () => {
        setDummyInputText("");
        setConversation(prevConversation => [
            ...prevConversation,
            { avatar: "/User.png", message: "What did you learn" }
        ]);
        setTimeout(() => {
            forcedResponse();
        }, 1000)
    };

    const forcedResponse = () => {
        let responseText = "During my time with the Odin Project, I gained foundational knowledge and hands-on experience across the full stack of web development. I honed my skills in HTML, CSS, and JavaScript for building responsive and interactive front-end interfaces. On the back end, I delved into server-side programming with Node.js, Express.js, and MongoDB, learning to create RESTful APIs and manage databases. Throughout various projects, I developed a strong understanding of version control using Git and GitHub, as well as deploying applications on cloud platforms. My learning emphasised problem-solving, debugging, and a disciplined approach to coding practices, preparing me to contribute effectively to dynamic development teams."
        setConversation(prevState => [
            ...prevState,
            { avatar: "/Avatar.png", message: "" }
        ]);

        let newString = '';
        const updateString = (i) => {
            if (i < responseText.length) {
                newString += responseText[i];
                setConversation(prevState => {
                    const newConversation = [...prevState];
                    newConversation[newConversation.length - 1].message = newString;
                    return newConversation;
                });
                let randomNumber = Math.floor(Math.random() * 10) + 1;
                if (randomNumber % 5 === 0) {
                    randomNumber *= 5;
                }
                setTimeout(() => updateString(i + 1), randomNumber);
            } else {
                setHandToGPT(true)
            }
        };
        updateString(0);
    };






    return (
        <div className="CV">
            <div className={`CV-nav ${isNavVisible ? 'visible' : 'hidden'}`}>
                {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className={`Dot ${activePage === index + 1 ? 'active' : ''}`}></div>
                ))}
            </div>

            <div className="Top-margin"></div>
            <div ref={scrollableDivRef} className="Main">

                <div className="CV-page" data-page="1">
                    <div className='CV-date'>
                        1995
                    </div>
                    <div className='CV-page-1-content'>
                        <div className='grid'>
                            <img src='/Location.png' />
                        </div>
                        <div className='grid'>Born and raised in Leeds, Uk</div>
                        <div className='grid'>Finised 6th form with 13 GCSE's and 4 A-Levels</div>
                        <div className='grid'>
                            <img src='/School.png' />
                        </div>
                        <div className='grid'>
                            <img src='/Tech.png' />
                        </div>
                        <div className='grid'>A keen interest in consumer technology and photography</div>
                    </div>
                </div>

                <div className="CV-page" data-page="2">
                    <div className='CV-date'>
                        2014
                    </div>
                    <div className='CV-page-2-content'>
                        <img src='/Bank.png' />
                        <div className='CV-Text-2'>
                            After graduating 6th Form, following a unique opportunity, I decided to pursue a position in the sought-after Lloyds Banking Group Apprenticeship Programme. Successfully competing with over 3000 applicants my skills were noticed and I spent the next few years managing small to medium complexity projects and assisting on some large flagship projects within the group along side studying for my NVQ Diploma in Project Management.
                        </div>
                    </div>
                </div>

                <div className="CV-page" data-page="3">
                    <div className='CV-date'>
                        2017
                    </div>
                    <div className='CV-page-3-content'>
                        <div className='grid'>
                            <img src='/Earth.png' />
                        </div>
                        <div className='grid'>In 2017, after a top 5% strong performance review and a promotion offer, I decided to leave the group and book a one-way ticket to Bangkok with the goal of working in Australia where I held down a number of jobs.</div>
                        <div className='grid'>
                            <img src='/Badge.png' />
                        </div>
                        <div className='grid'>With a strong office background I was able to quickly land multiple temporary office jobs.</div>
                        <div className='grid'>
                            <img src='/Tractor.png' />
                        </div>
                        <div className='grid'>To gain my second year visa I completed ‘regional work' where I quickly worked up from picking fruit to operating heavy agricultural machinery and becoming
                            <br />"The quickest learner and best tractor chaser I have ever seen" - Trevor</div>
                        <div className='grid'>
                            <img src='/Worker.png' />
                        </div>
                        <div className='grid'>I finished off my life in Australia with a construction role contributing to the creation of the Sydney Light Rail network.</div>
                    </div>
                </div>

                <div className="CV-page" data-page="4">
                    <div className='CV-date'>
                        2019
                    </div>
                    <div className='CV-page-4-content'>
                        <div className='CV-4-section'
                            style={{
                                alignItems: 'center'
                            }}>
                            <img src='/Covid.png' />
                        </div>
                        <div className='CV-4-section'>
                            Whilst travelling through a small costal town in the south of Vietnam, the world was put on hold. Fortunately, Vietnam was incredibly proactive at the time and gave me an opportunity to live in one of the most unaffected areas in the world.

                        </div>
                        <div className='CV-4-section'
                            style={{
                                alignItems: 'center'
                            }}>
                            <img src='/Teacher.png' />
                        </div>
                        <div className='CV-4-section'>
                            I began working as an English teacher at a local school in the area and after quickly mastering my skills I was offered a role at a prestigious international school and built a wonderful life for myself.
                        </div>
                    </div>
                </div>

                <div className="CV-page-5" data-page="5">
                    <div className='CV-date'>
                        2022
                    </div>
                    <img src='Code.png' />
                    <div className='Chat-container'>
                        <div className='Chat-window'>

                            <div className='Message-container'>
                                <img
                                    className='Message-image'
                                    src={conversation[0].avatar} />
                                <div className='Message-content'>
                                    {conversation[0].message}
                                </div>
                            </div>

                            {conversation[1] && (
                                <div className='Message-container'>
                                    <img
                                        className='Message-image'
                                        src={conversation[1].avatar} />
                                    <div className='Message-content'>
                                        {conversation[1].message}
                                    </div>
                                </div>
                            )}


                            {conversation[2] && (
                                <div className='Message-container'>
                                    <img
                                        className='Message-image'
                                        src={conversation[2].avatar} />
                                    <div className='Message-content'>
                                        {conversation[2].message}
                                    </div>
                                </div>
                            )}

                        </div>


                        {handedToGPT ? (
                            <div className='Input-container'>
                                <input />
                                <button
                                className='Go3'>Go</button>
                            </div>
                        ) : (
                            <div className='Input-container'>
                                <div className='Dummy-input'>{dummyInputText}</div>
                                {forcedMessageAvailable ? (
                                    <button
                                    className='Go2'
                                        onClick={handleFakeMessage}
                                    >Go</button>
                                ) : (
                                    <button
                                    className='Go1'
                                    >Go</button>
                                )}

                            </div>
                        )}


                    </div>
                </div>

                <div className="CV-page" data-page="6">
                    <div className='CV-date'>
                        Now
                    </div>
                    <div className='CV-page-6-content'>
                        <div className='text'>
                            In 2024 I moved to Hanoi where I have been coding projects full time and capturing some of the world's most breathtaking scenery on film in my spare time.
                            <br />
                            <br />
                            I love creating and I have walked the path of web development in complete solitude, but I want to create, build and grow something with other people who are passionate about the same thing. I love problem solving and banging heads to design and execute elegant solutions.
                        </div>
                        <div className='Download-CV'>
                            <p>Click here to download my full resume</p>
                            <button>Download</button>
                        </div>

                    </div>
                </div>

                {/* <img className='Down-arrow' src='/DownArrow.png' /> */}


            </div>
        </div>
    );
};