import React, { useState } from 'react';
import Modal from '../components/Modal';

const Projects = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (contentId) => {
        // 각 프로젝트에 맞는 컨텐츠를 동적으로 로드하거나 미리 정의해둘 수 있습니다.
        // 여기서는 간단히 ID만 넘겨 Modal 컴포넌트 내부에서 처리하도록 합니다.
        setModalContent(contentId);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <h2>프로젝트</h2>

            <div className="section-item clickable" onClick={() => openModal('devArchive')}>
                <div className="item-header">
                    <h3>DevArchive (협업 및 지식 아카이빙 플랫폼)</h3>
                    <span className="period">2025. 01. ~ 진행 중</span>
                </div>
                <div className="role-tech">
                    <p><strong>역할:</strong> Full Stack, AI Service Developer, System Architect</p>
                    <p><strong>기술:</strong> React, Vite, TailwindCSS, Spring Boot, FastAPI, LangChain, RAG, WebRTC, WebSocket</p>
                </div>
                <ul>
                    <li>MSA 기반 백엔드 아키텍처 설계 및 AI 서비스 분리</li>
                    <li>RAG 기반 AI 지식베이스 및 문서 임베딩 시스템 구현</li>
                    <li>WebSocket 실시간 통신 및 WebRTC P2P 음성/화상 채널 개발</li>
                    <li>세분화된 권한 시스템 및 계층형 역할 관리 설계</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => window.open('https://github.com/pudhy070/Prizm-springboot', '_blank')}>
                <div className="item-header">
                    <h3>PRIZM (실시간 협업 메신저)</h3>
                    <span className="period">2025. 11. ~ 진행 중</span>
                </div>
                <div className="role-tech">
                    <p><strong>역할:</strong> Full Stack, AI Service Developer</p>
                    <p><strong>기술:</strong> React, Vite, Spring Boot, FastAPI, OpenAI, LangChain</p>
                </div>
                <ul>
                    <li>React 기반 채팅 인터페이스 및 프론트엔드 UI/UX 설계</li>
                    <li>Spring Boot 백엔드 및 FastAPI를 활용한 AI 서비스 연동</li>
                    <li>OpenAI, LangChain 기반 회의록 작성 및 문서 정리 기능 개발</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => openModal('isekaiCard')}>
                <div className="item-header">
                    <h3>Isekai Card (AI 기반 카드 추천 플랫폼)</h3>
                    <span className="period">2025. 10. ~ 2025. 10.</span>
                </div>
                <div className="role-tech">
                    <p><strong>역할:</strong> Full Stack, AI Service Developer</p>
                    <p><strong>기술:</strong> React, Vite, Spring Boot, Flask, Python, OpenAI, MySQL</p>
                </div>
                <ul>
                    <li>마이크로서비스 아키텍처(MSA) 형식으로 기능별 백엔드 서버 분리 설계</li>
                    <li>OpenAI LLM 기반 카드 데이터 학습 및 맞춤형 AI 카드 추천 서비스 구현</li>
                    <li>Spring Boot 이벤트 CRUD, Flask 카드 신청 API 개발</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => window.open('https://github.com/pudhy070/Header_BackEnd', '_blank')}>
                <div className="item-header">
                    <h3>레시픽 (식자재 관리 및 레시피 추천)</h3>
                    <span className="period">2025. 09. ~ 2025. 09.</span>
                </div>
                <div className="role-tech">
                    <p><strong>역할:</strong> Full Stack, DevSecOps</p>
                    <p><strong>기술:</strong> React, Vite, Tailwind CSS, Spring Boot, Spring Security, JWT</p>
                </div>
                <ul>
                    <li>Spring Security, JWT 기반 소셜 로그인 및 인증 로직 설계/구현</li>
                    <li>시큐어 코딩 및 서버 보안 환경 설정을 통해 서비스 안정성 강화</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => window.open('https://github.com/HIMEDIA-Roadmap/Nadri_Refactored', '_blank')}>
                <div className="item-header">
                    <h3>Nadri (단기 여행 솔루션)</h3>
                    <span className="period">2025. 08. ~ 2025. 08.</span>
                </div>
                <div className="role-tech">
                    <p><strong>역할:</strong> 프론트엔드(리드), API/AI 연동 개발자</p>
                    <p><strong>기술:</strong> React, Vite, Google Gemini API</p>
                </div>
                <ul>
                    <li>Google Gemini API를 활용한 여행 추천 서비스(경로, 일정) 개발</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => openModal('isekaiArchive')}>
                <div className="item-header">
                    <h3>Isekai Archive (그룹웨어 플랫폼)</h3>
                    <span className="period">2025. 09. ~ 2025. 09.</span>
                </div>
                <div className="role-tech">
                    <p><strong>역할:</strong> Frontend Developer, System Architect</p>
                    <p><strong>기술:</strong> React 19, Vite, MUI, Emotion, FullCalendar, Recharts</p>
                </div>
                <ul>
                    <li>인사/조직 관리, 근태, CRM, 자금/회계, 메일, 전자결재 등 10개 이상의 그룹웨어 모듈 구현</li>
                    <li>FullCalendar 기반 일정 관리 및 ONEDDICE 네트워크 드라이브 시스템 개발</li>
                    <li>MUI와 Emotion을 활용한 통일된 디자인 시스템 및 반응형 UI 설계</li>
                </ul>
            </div>

            {modalContent && <Modal contentId={modalContent} closeModal={closeModal} />}
        </>
    );
};

export default Projects;