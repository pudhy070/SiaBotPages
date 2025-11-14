import React from 'react';

const Activities = () => {
    return (
        <>
            <h2>대외활동</h2>
            {/*
            <div className="timeline-item">
                <div className="timeline-header">
                    <span className="timeline-title">한양사이버대학교 학과 학생회장</span>
                    <span className="timeline-date">2025</span>
                </div>
                <p className="timeline-subtitle">응용소프트웨어공학과 학생회 회장</p>
            </div>
            */}
            {/*
            <div className="timeline-item">
                <div className="timeline-header">
                    <span className="timeline-title">Code Runner</span>
                    <span className="timeline-date">2025</span>
                </div>
                <p className="timeline-subtitle">한양사이버대학교 학과 스터디 | 창립 멤버</p>
            </div>
            */}
            <div className="timeline-item">
                <div className="timeline-header">
                    <span className="timeline-title">NGJ (게임개발)</span>
                    <span className="timeline-date">2020.03 ~ 2021.02</span>
                </div>
                <p className="timeline-subtitle">언리얼엔진을 활용한 게임 개발 동아리</p>
            </div>
            <div className="timeline-item">
                <div className="timeline-header">
                    <span className="timeline-title">PAD동아리</span>
                    <span className="timeline-date">2019.03 ~ 2020.02</span>
                </div>
                <p className="timeline-subtitle">Python 코딩 동아리 부장</p>
                <ul>
                    <li>스마트 미러 제작 및 전시</li>
                    <li>C언어를 이용한 각종 게임 제작</li>
                    <li>pygame을 이용한 슈팅 게임 제작</li>
                </ul>
            </div>
            <div className="timeline-item">
                <div className="timeline-header">
                    <span className="timeline-title">시제품제작부</span>
                    <span className="timeline-date">2018.03 ~ 2019.02</span>
                </div>
                <p className="timeline-subtitle">솔리드웍스, 3D프린터를 이용한 3D제작물 동아리</p>
            </div>
        </>
    );
};

export default Activities;