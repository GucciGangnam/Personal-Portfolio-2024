import React, { useState, useEffect, useRef } from 'react';
import "./CV.css";

export const CV = () => {
    const scrollableDivRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const [pageInVP, setPageInVP] = useState(null)

    const handleScroll = () => {
        const scrollTop = scrollableDivRef.current.scrollTop;
        const scrollHeight = scrollableDivRef.current.scrollHeight;
        const clientHeight = scrollableDivRef.current.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
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
                    setPageInVP(page)
                }
            });
        }, observerOptions);

        const pages = document.querySelectorAll('.Main > div');
        pages.forEach(page => observer.observe(page));

        return () => {
            pages.forEach(page => observer.unobserve(page));
        };
    }, []);

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
                            After graduating highschool, following a unique oportunity, I decided to persue a position in the sought-after Lloyds Banking Group Appreticeship Programme. Sucessfully competeing with over 3000 aplicants my skills were noticed and I spent the next few years managing small to medium compleity projects and assisting on some large flagship projects within the group along side studying for my NVQ Diploma in Project Management.
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
                        <div className='grid'>In 2017, after a top 5% strong performance review and a promotion offer, I decided to leave the group and book a one-way ticket to Bangkok with the goal of workign in Australia where I held down a number of jobs.</div>
                        <div className='grid'>
                            <img src='/Badge.png' />
                        </div>
                        <div className='grid'>With a strong office background I was able to quickly land multiple temperary office jobs.</div>
                        <div className='grid'>
                            <img src='/Tractor.png' />
                        </div>
                        <div className='grid'>To gain my second year visa I had to complete 88 days of 'regional work' where I quickly worked up from picking fruit to operating heavy agriculturay machinary and beoming
                            <br />"The quickest learner and best tractor chaser I have ever seen" - Trevor</div>
                        <div className='grid'>
                            <img src='/Worker.png' />
                        </div>
                        <div className='grid'>I finished off my life in Australia with a construction role contributing to the creation of the Syndey Light Rail netwrok.</div>
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
                            I began working as an English teacher at a local school in the area and after quickly mastring my skills I was offered a role at a prestigious international school and built a wonderful life for myself.
                        </div>
                    </div>
                </div>

                <div className="CV-page" data-page="5">
                    <div className='CV-date'>
                        2022
                    </div>
                    <div className='CV-page-5-content'>
                        {pageInVP == 5 && (
                            <>
                                <p>Confident in my teaching ability, based on exceptional feedback, I wanted to challange myself and learn somethign new.</p>
                                <p>My admiration for tech and creativity led me to learning Full Stack Web development.</p>
                                <p>I faced the biggest learnign curve of my life trying to self teach, but persisted and eventually found the Odin Project.</p>
                                <p>The Odin Project is an open sourced, deeply comprehensive curriculum of web development from scratch.</p>
                                <p> with a solid syllabus to follow, I moved to Ho Chi Minh City Started working part time so I could focus on writing code.</p>
                            </>
                        )}
                    </div>
                </div>

                <div className="CV-page" data-page="6">
                    <div className='CV-date'>
                        Now
                    </div>
                    <div className='CV-page-6-content'>

                    </div>
                </div>

                {/* <img className='Down-arrow' src='/DownArrow.png' /> */}


            </div>
        </div>
    );
};