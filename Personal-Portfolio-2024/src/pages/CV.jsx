import React, { useState, useEffect, useRef } from 'react';
import "./CV.css";

export const CV = () => {
const [isScrollingDown, setIsScrollingDown] = useState(false);
const [activePage, setActivePage] = useState(1); // Track the active page

const mainRef = useRef(null);
const navRef = useRef(null);

useEffect(() => {
const mainDiv = mainRef.current;
const navDiv = navRef.current;

if (!mainDiv || !navDiv) return;

const observerOptions = {
root: mainDiv,
threshold: 0.5 // Trigger when 50% of the page is visible
};

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const pageIndex = parseInt(entry.target.getAttribute('data-page'), 10);
setActivePage(pageIndex);
}
});
}, observerOptions);

const pages = mainDiv.querySelectorAll('.Main > div');
pages.forEach(page => observer.observe(page));

return () => {
pages.forEach(page => observer.unobserve(page));
};
}, []);

useEffect(() => {
const handleScroll = () => {
const mainDiv = mainRef.current;
if (mainDiv) {
const scrollTop = mainDiv.scrollTop;
setIsScrollingDown(scrollTop > 0);
}
};

mainRef.current.addEventListener('scroll', handleScroll);

return () => {
mainRef.current.removeEventListener('scroll', handleScroll);
};
}, []);

// Log state changes
useEffect(() => {

console.log("isScrollingDown:", isScrollingDown);
console.log("Active Page:", activePage);
}, [isScrollingDown, activePage]);

return (
<div className="CV">
{(isScrollingDown || activePage !== 6) && (
<div className="CV-nav" ref={navRef}>
<div className={`Dot ${activePage === 1 ? 'active' : ''}`}></div>
<div className={`Dot ${activePage === 2 ? 'active' : ''}`}></div>
<div className={`Dot ${activePage === 3 ? 'active' : ''}`}></div>
<div className={`Dot ${activePage === 4 ? 'active' : ''}`}></div>
<div className={`Dot ${activePage === 5 ? 'active' : ''}`}></div>
<div className={`Dot ${activePage === 6 ? 'active' : ''}`}></div>
</div>
)}
<div className="Top-margin"></div>
<div className="Main" ref={mainRef}>
<div className="CV-page-1" data-page="1">1995</div>
<div className="CV-page-2" data-page="2">2014</div>
<div className="CV-page-3" data-page="3">2017</div>
<div className="CV-page-4" data-page="4">2019</div>
<div className="CV-page-5" data-page="5">2021</div>
<div className="CV-page-6" data-page="6">Now</div>
</div>
</div>
);
};