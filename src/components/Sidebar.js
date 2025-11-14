import React from 'react';

const Sidebar = ({ activeSection, isActive }) => {
    const navItems = [
        { id: 'intro', title: '소개' },
        { id: 'experience', title: '개발 경력' },
        { id: 'strengths', title: '장점' },
        { id: 'skills', title: '기술 스택' },
        { id: 'projects', title: '프로젝트' },
        { id: 'side-projects', title: '사이드 프로젝트' },
        { id: 'education', title: '학력' },
        { id: 'hobby', title: '취미' },
    ];

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="nav-title">📋 목차</div>
            <nav>
                <ul className="nav-list">
                    {navItems.map(item => (
                        <li key={item.id} className="nav-item">
                            <a href={`#${item.id}`} className={`nav-link ${activeSection === item.id ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, `#${item.id}`)}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;