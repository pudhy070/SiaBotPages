import React from 'react';

const Experience = () => {
    return (
        <>
            <h2>개발 경력</h2>
            <div className="section-item">
                <div className="item-header">
                    <h3>ITS 개발자</h3>
                    <span className="period">2년</span>
                </div>
                <p>
                    IT 통신 분야에서 2년간 실무 경험을 쌓으며 TCP/IP, Linux 시스템에 대한 깊은 이해를 바탕으로 안정적인 서비스 운영 능력을 갖추었습니다.
                </p>
            </div>
            <div className="section-item">
                <div className="item-header">
                    <h3>Discord Bot Developer</h3>
                </div>
                <p>
                    Python과 AI API를 활용하여 커뮤니티 운영을 자동화하고 사용자 편의 기능을 제공하는 다수의 봇을 개발 및 운영한 경험이 있습니다.
                </p>
            </div>
            <div className="section-item">
                <div className="item-header">
                    <h3>웹 개발</h3>
                    <span className="period">0년</span>
                </div>
                <p>
                    신입 웹 개발자로서 부트캠프를 통해 실무 역량을 쌓고 있으며, 풀스택 개발자를 목표로 성장하고 있습니다.
                </p>
            </div>
        </>
    );
};

export default Experience;