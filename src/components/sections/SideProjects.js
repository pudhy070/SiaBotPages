import React, { useState } from 'react';
import Modal from '../Modal';

const SideProjects = () => {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (contentId) => {
        setModalContent(contentId);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <>
            <h2>사이드 프로젝트</h2>

            <div className="section-item clickable" onClick={() => openModal('siaBotPython')}>
                <div className="item-header">
                    <h3>Sia Discord Bot (Python)</h3>
                </div>
                <div className="role-tech">
                    <p><strong>기술:</strong> Python, discord.py, OpenAI API</p>
                </div>
                <ul>
                    <li>음악, 프로필, 서버 관리 등 다기능 디스코드 봇 개발</li>
                    <li>AI 챗봇 기능 및 자동 환영 메시지 시스템 구현</li>
                    <li>유튜브 음악 재생 및 대기열 관리 기능</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => openModal('siaBotKotlin')}>
                <div className="item-header">
                    <h3>Sia Discord Bot (Kotlin)</h3>
                </div>
                <div className="role-tech">
                    <p><strong>기술:</strong> Kotlin, JDA</p>
                </div>
                <ul>
                    <li>경제 및 레벨 시스템을 포함한 올인원 디스코드 봇</li>
                    <li>게임, 유틸리티, 서버 관리 기능 통합</li>
                    <li>채팅 활동 기반 경험치 및 코인 시스템 구현</li>
                </ul>
            </div>

            <div className="section-item clickable" onClick={() => openModal('aiReport')}>
                <div className="item-header">
                    <h3>AI 프로젝트 보고서 생성기</h3>
                </div>
                <div className="role-tech">
                    <p><strong>기술:</strong> Python, CustomTkinter, OpenAI API, Pandoc, LaTeX</p>
                </div>
                <ul>
                    <li>GUI 기반 프로젝트 보고서 자동 생성 데스크톱 애플리케이션</li>
                    <li>GPT-4를 활용한 체계적인 보고서 작성</li>
                    <li>PDF 변환 및 실시간 미리보기 기능</li>
                </ul>
            </div>

            {modalContent && <Modal contentId={modalContent} closeModal={closeModal} />}
        </>
    );
};

export default SideProjects;