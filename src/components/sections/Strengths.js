import React from 'react';

const Strengths = () => {
    return (
        <>
            <h2>장점</h2>
            <div className="section-item">
                <div className="item-header">
                    <h3>🛡️ 정보보안 전문성</h3>
                </div>
                <p>
                    <strong>Kali Linux</strong>를 활용하여 안드로이드 해킹, 웹 해킹 등 다양한 모의해킹 실습을 수행하며 시스템 보안, 네트워크 보안 분야에 대한 깊은 지식을 보유하고 있습니다.  
                    또한 개인적으로 <strong>Ubuntu 기반 홈서버</strong>를 직접 구축·운영하며 서비스 관리, 리소스 모니터링, 네트워크 설정 등 실전 운영 경험을 쌓고 있습니다.
                </p>
            </div>
            <div className="section-item">
                <h3>🔧 인프라 & 문제 해결 능력</h3>
                <p>
                    IT 통신 분야 2년 실무 경험을 통해 <strong>TCP/IP 네트워크 구조</strong>와 <strong>Linux 시스템</strong>에 대한 깊은 이해를 보유하고 있습니다. 장애 발생 시 근본 원인을 빠르게 파악하고 해결하는 능력을 갖췄으며, Arch Linux 환경을 직접 구축·운영하며 시스템 최적화 역량을 꾸준히 키워왔습니다.
                </p>
            </div>
            {/*
            <div className="section-item">
                <h3>🤝 협업 & 리더십</h3>
                <p>
                    현재 <strong>응용소프트웨어공학과 학생회장</strong>으로 활동하며 팀원 간 소통, 일정 관리, 프로젝트 조율 등 실전 리더십을 발휘하고 있습니다. 또한 Code Runner 스터디의 <strong>창립 멤버</strong>로서 동료 개발자들과 기술 교류 및 협업 문화 형성에 기여하고 있습니다.
                </p>
            </div>
            */}
            <div className="section-item">
                <h3>💡 빠른 학습 & 실행력</h3>
                <p>
                    부트캠프를 통해 <strong>React, Spring Boot, AI 서비스 개발</strong>을 단기간에 습득하고 실제 프로젝트에 적용한 경험이 있습니다. 새로운 기술 스택을 빠르게 학습하고 실무에 적용하는 능력을 갖추고 있으며, 문제 해결을 위해 공식 문서와 커뮤니티를 적극 활용합니다.
                </p>
            </div>
        </>
    );
};

export default Strengths;