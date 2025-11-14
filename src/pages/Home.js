import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Intro from '../components/Intro'; // 경로 일관성을 위해 유지
import Experience from '../components/sections/Experience';
import Strengths from '../components/sections/Strengths';
import Skills from '../components/sections/Skills';
import Projects from '../components/Projects';
import SideProjects from '../components/sections/SideProjects';
import Education from '../components/sections/Education';
import Activities from '../components/sections/Activities';
import Hobby from '../components/sections/Hobby';
import AnimatedBg from '../components/AnimatedBg';

const Home = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [isSidebarActive, setSidebarActive] = useState(false);
    const sections = useRef({});

    const sectionComponents = {
        intro: <Intro />,
        experience: <Experience />,
        strengths: <Strengths />,
        skills: <Skills />,
        projects: <Projects />,
        'side-projects': <SideProjects />,
        education: <Education />,
        activities: <Activities />,
        hobby: <Hobby />,
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        Object.values(sections.current).forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            Object.values(sections.current).forEach(section => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const handleMenuToggle = () => {
        setSidebarActive(!isSidebarActive);
    };

    const closeSidebar = () => {
        if (isSidebarActive) {
            setSidebarActive(false);
        }
    }

    return (
        <>
            <AnimatedBg />
            <div className="layout" onClick={closeSidebar}>
                <Sidebar activeSection={activeSection} isActive={isSidebarActive} />
                <div className="content">
                    <div className="container">
                        <Header />
                        <main className="main-content">
                            {Object.entries(sectionComponents).map(([id, component]) => (
                                <section
                                    key={id}
                                    id={id}
                                    ref={el => sections.current[id] = el}
                                >
                                    {component}
                                </section>
                            ))}
                        </main>
                    </div>
                </div>
            </div>
            <button
                className="mobile-menu-toggle"
                id="menuToggle"
                aria-label="메뉴 열기/닫기"
                onClick={(e) => {
                    e.stopPropagation(); // layout의 onClick 이벤트 전파 방지
                    handleMenuToggle();
                }}
            >
                ☰
            </button>
        </>
    );
};

export default Home;