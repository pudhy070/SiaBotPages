import React, { useEffect, useState } from 'react';

const Sidebar = ({ isActive, setSidebarActive }) => {
    const [activeLink, setActiveLink] = useState('intro');

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveLink(targetId.substring(1));
            if (window.innerWidth <= 1024) {
                setSidebarActive(false);
            }
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const highlightNavigation = () => {
            const scrollPosition = window.scrollY + 150;
            sections.forEach(section => {
                if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveLink(section.id);
                }
            });
        };
        window.addEventListener('scroll', highlightNavigation);
        return () => window.removeEventListener('scroll', highlightNavigation);
    }, []);

    const navItems = [
        { href: '#intro', text: '소개' }, { href: '#experience', text: '개발 경력' },
        { href: '#strengths', text: '장점' }, { href: '#skills', text: '기술 스택' },
        { href: '#projects', text: '프로젝트' }, { href: '#side-projects', text: '사이드 프로젝트' },
        { href: '#education', text: '학력' }, { href: '#hobby', text: '취미' }
    ];

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
            <div className="nav-title">📋 목차</div>
            <nav>
                <ul className="nav-list">
                    {navItems.map(item => (
                        <li className="nav-item" key={item.href}><a href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className={`nav-link ${activeLink === item.href.substring(1) ? 'active' : ''}`}>{item.text}</a></li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;