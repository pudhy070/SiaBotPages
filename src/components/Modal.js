import React, { useEffect } from 'react';

// 각 모달의 컨텐츠를 별도 컴포넌트로 분리하면 더 좋습니다.
const DevArchiveContent = () => (
    <div className="dev-archive-content">
        <h2>Welcome to DevArchive</h2>
        <p><strong>DevArchive: 개발자를 위한, 개발자에 의한 차세대 협업 및 지식 아카이빙 플랫폼</strong></p>
        <hr style={{ borderColor: 'rgba(0, 123, 255, 0.2)', margin: '20px 0' }} />

        <h3>1. Core Philosophy</h3>
        <p>DevArchive는 단순한 채팅 애플리케이션이 아닙니다. 이 프로젝트는 개발 팀의 <strong>'휘발성 지식'</strong> 을 <strong>'영구적 자산'</strong> 으로 전환하는 것을 목표로 합니다.</p>
        <p>슬랙, 디스코드 등에서 오고 가는 수많은 대화, 코드 조각, 링크, 문서는 시간이 지나면 검색하기 어려운 정보의 파편이 됩니다. DevArchive는 이 파편들을 체계적으로 아카이빙하고, AI를 통해 의미 있는 지식으로 재창조하는 개발자 중심의 작업 공간을 제공합니다.</p>
        <blockquote>"대화가 곧 문서가 되고, 문서가 곧 살아있는 지식 베이스가 되는 곳."</blockquote>

        <h3>2. Architecture Overview</h3>
        <p>본 프로젝트는 현대적인 MSA(Microservice Architecture)를 채택하여 유연성과 확장성을 극대화했습니다.</p>
        <pre><code>{`┌───────────────────────────────┐      ┌───────────────────────────────┐
│      Frontend (React)         │      │      AI Service (Python)      │
│  (Vite, TailwindCSS, WebRTC)  │      │   (FastAPI, LangChain, RAG)   │
└───────────────┬───────────────┘      └───────────────┬───────────────┘
                │ REST API & WebSocket                 │ REST API
┌───────────────▼───────────────┐      ┌───────────────▼───────────────┐
│      Backend (Java)           │◄─────►│      Vector DB (e.g. Chroma)  │
│ (Spring Boot, JPA, WebSockets)│      └───────────────────────────────┘
└───────────────┬───────────────┘
                │
┌───────────────▼───────────────┐
│      Database (MariaDB)       │
└───────────────────────────────┘`}</code></pre>
        <ul>
            <li><strong>Backend (Java/Spring Boot)</strong>: 핵심 비즈니스 로직, 사용자 인증, 데이터 관리, 실시간 통신(WebSocket)을 담당하는 주력 서비스입니다. 안정성과 성능을 보장합니다.</li>
            <li><strong>AI Service (Python/FastAPI)</strong>: 문서 임베딩, RAG(Retrieval-Augmented Generation) 기반의 질의응답, LLM 연동 등 모든 AI 연산을 전담하는 독립적인 서비스입니다. Python의 풍부한 AI 생태계를 최대한 활용합니다.</li>
            <li><strong>Frontend (React)</strong>: Vite 기반의 빠른 개발 환경과 TailwindCSS를 사용한 효율적인 UI 개발, 그리고 WebRTC를 통한 P2P 음성/화상 통신을 구현합니다.</li>
        </ul>

        <h3>3. Key Features for Developers</h3>
        <h4>🤖 <strong>AI-Powered Knowledge Base (RAG)</strong></h4>
        <ul>
            <li>사용자가 업로드한 모든 문서(PDF, PPTX, Markdown 등)는 자동으로 텍스트로 추출되고, 의미 단위의 청크(Chunk)로 분할된 후 벡터 임베딩으로 변환되어 Vector DB에 저장됩니다.</li>
            <li>사용자가 AI에게 질문하면, 질문과 가장 관련성 높은 문서 조각들을 실시간으로 검색하여 LLM 프롬프트에 컨텍스트로 주입합니다. 이를 통해 <strong>Hallucination을 최소화</strong>하고, 프로젝트의 내부 문서에 기반한 정확한 답변을 생성합니다.</li>
        </ul>

        <h4>🔐 <strong>Granular Permission System</strong></h4>
        <ul>
            <li>서버 소유자, 관리자, 멤버 등 단순한 구분을 넘어, 30개 이상의 세분화된 권한(e.g., `MANAGE_CHANNELS`, `KICK_MEMBERS`)을 조합하여 커스텀 역할을 생성할 수 있습니다.</li>
            <li>역할별 계층 구조(`position`)를 두어, 상위 역할만 하위 역할을 관리할 수 있는 정교한 통제가 가능합니다.</li>
        </ul>

        <h4>📡 <strong>Real-time Communication</strong></h4>
        <ul>
            <li><strong>WebSocket</strong>: 메시지 전송, 사용자 상태 변경, 타이핑 인디케이터 등 모든 실시간 이벤트는 WebSocket을 통해 클라이언트에 즉시 전파됩니다.</li>
            <li><strong>WebRTC</strong>: 음성/화상 채널은 P2P(Peer-to-Peer) 연결을 위한 WebRTC를 사용합니다. 백엔드는 STUN/TURN 서버 정보 제공 및 시그널링(Offer, Answer, ICE Candidate 교환) 중계 역할만 수행하여 서버 부하를 최소화합니다.</li>
        </ul>

        <h4>🧱 <strong>Layered & Decoupled Design</strong></h4>
        <ul>
            <li>백엔드는 `Controller` - `Service` - `Repository`의 명확한 계층형 아키텍처를 따릅니다.</li>
            <li>`PermissionService`, `FileStorageService` 등 공통 관심사는 별도의 서비스로 분리하여(SoC) 코드의 재사용성과 유지보수성을 높였습니다.</li>
            <li>Spring의 DI(Dependency Injection)를 통해 클래스 간 결합도를 낮춰 단위 테스트가 용이한 구조를 지향합니다.</li>
        </ul>

        <h3>4. Getting Started</h3>
        <p>이 프로젝트를 더 깊이 이해하고 싶다면 다음 문서를 참고하세요.</p>
        <ul>
            <li>클래스 설계 명세서: 시스템의 전체 클래스 구조와 설계 원칙을 확인하세요.</li>
            <li>데이터베이스 설계 요약: ERD와 주요 테이블 명세를 통해 데이터 구조를 파악하세요.</li>
            <li>API 명세 (Swagger/OpenAPI): 백엔드와 AI 서비스의 모든 API 엔드포인트를 탐색하세요. (링크 예정)</li>
        </ul>
        <p>이제 DevArchive의 코드를 통해 직접 확인해 보세요.</p>
        <a href="https://github.com/pudhy070/Discord_Frontend" target="_blank" rel="noopener noreferrer" className="modal-github-link">GitHub에서 보기</a>
    </div>
);

const IsekaiCardContent = () => (
    <div className="dev-archive-content">
        <h2>💳 이세계 카드 (Isekai Card)</h2>
        <p><strong>React, Spring Boot, Flask를 활용한 마이크로서비스 아키텍처(MSA) 형식의 카드 발급 신청 및 관리 플랫폼</strong></p>
        <hr style={{ borderColor: 'rgba(0, 123, 255, 0.2)', margin: '20px 0' }} />

        <p>현대적인 웹 UI/UX를 갖춘 카드사 웹사이트를 컨셉으로, 기능별로 백엔드 서버를 분리하여 각 기술 스택의 장점을 최대한 활용하고자 했습니다. 사용자는 다양한 카드의 혜택을 확인하고, 이벤트를 조회하며, 직접 카드를 신청하고 그 현황을 추적할 수 수 있습니다.</p>

        <h3>✨ 주요 기능</h3>
        <ul>
            <li>🎨 <strong>세련된 UI/UX</strong>: 최신 웹 트렌드에 맞는 깔끔하고 직관적인 사용자 인터페이스</li>
            <li>📢 <strong>이벤트 게시판 (CRUD)</strong>: Spring Boot로 구현된 이벤트 공지 및 관리 기능</li>
            <li>📝 <strong>카드 신청 기능</strong>: Flask로 구현된 사용자 카드 발급 신청 기능</li>
            <li>🔍 <strong>신청 현황 조회</strong>: 이메일을 통해 자신의 카드 신청 처리 현황 조회</li>
            <li>🔐 <strong>관리자 페이지</strong>: Flask와 연동하여 접수된 모든 카드 신청 내역 조회 및 삭제</li>
            <li>🏛️ <strong>마이크로서비스 아키텍처</strong>: 기능별(이벤트/카드신청) 백엔드 서버를 분리하여 독립적인 개발 및 배포 환경 구축</li>
            <li>🤖 <strong>AI 카드 찾기 서비스</strong>: OpenAI를 활용한 나에게 맞는 카드 찾기 서비스</li>
        </ul>

        <h3>🛠️ 기술 스택</h3>
        <h4>Frontend</h4>
        <ul>
            <li>React 18.x</li>
            <li>Vite</li>
            <li>React Router 6.x</li>
            <li>CSS Modules / Global CSS</li>
        </ul>

        <h4>Backend 1 (Spring Boot - RestAPI, 이벤트 CRUD, 카드 신청 및 현황 리스트)</h4>
        <ul>
            <li>Java 21</li>
            <li>Spring Boot 3.3.x</li>
            <li>Spring Data JPA</li>
            <li>Gradle</li>
            <li>H2 (In-memory Database)</li>
        </ul>

        <h4>Backend 2 (Flask - AI 카드 추천)</h4>
        <ul>
            <li>Python 3.13.7</li>
            <li>OpenAI</li>
        </ul>

        <h3>🏛️ 시스템 아키텍처</h3>
        <p>본 프로젝트는 각 기능의 역할과 책임에 따라 백엔드 서버를 분리한 마이크로서비스 아키텍처(MSA) 형태로 설계되었습니다.</p>
        <pre><code>{`┌─────────────────────────┐
│                         │
│   React Frontend        │
│ (http://localhost:5173) │
│                         │
└─────────────────────────┘
           │
           ├─ (이벤트 CRUD, 카드 신청, 리스트) ─> ┌──────────────────────────┐      ┌─────────────┐
           │                                     │ Spring Boot (Port: 8080) │─────>│ DB(MySQL)   │
           │                                     └──────────────────────────┘      └─────────────┘
           │
           └─ (AI 카드 찾기 이벤트) ─> ┌──────────────────────────┐
                                       │    Flask (Port: 5000)    │
                                       └──────────────────────────┘`}</code></pre>

        <ul>
            <li><strong>React (Client)</strong>: 모든 사용자 인터페이스와 상호작용을 담당하며, 필요한 데이터는 기능에 맞는 백엔드 API 서버에 비동기적으로 요청합니다.</li>
            <li><strong>Spring Boot (Backend 1)</strong>: Java의 안정성과 강력한 생태계를 바탕으로 이벤트 게시판의 CRUD, 카드 신청 및 리스트 현황 기능을 전담합니다.</li>
            <li><strong>Flask (Backend 2)</strong>: LLM에 데이터 파일(json)을 넣어 학습을 시킨 후 나만의 카드 찾기 AI 서비스를 만들었습니다.</li>
        </ul>

        <h3>📦 관련 리포지토리</h3>
        <ul>
            <li><a href="https://github.com/pudhy070/IsekaiCard_FE_AI" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>Frontend (React)</a></li>
            <li><a href="https://github.com/pudhy070/IsekaiCard_SpringBoot_AI" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>Backend - Spring Boot</a></li>
            <li><a href="https://github.com/pudhy070/IsekaiCard_LLM" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>Backend - Flask (AI)</a></li>
        </ul>

        <a href="https://github.com/pudhy070/IsekaiCard_FE_AI" target="_blank" rel="noopener noreferrer" className="modal-github-link">GitHub에서 보기</a>
    </div>
);

const IsekaiArchiveContent = () => (
    <div className="dev-archive-content">
        <h2>🚀 Isekai Archive</h2>
        <p><strong>업무와 협업의 세계를 새로운 모험처럼 즐기며 기록할 수 있는 그룹웨어 프로젝트</strong></p>
        <hr style={{ borderColor: 'rgba(0, 123, 255, 0.2)', margin: '20px 0' }} />
        <p>팀의 모든 지식과 아이디어를 한곳에 모아 쉽게 찾아보고 공유할 수 있습니다.</p>
        <h3>🌟 주요 기능</h3>
        <ul>
            <li>🏢 <strong>인사 / 조직 관리</strong>: 직원 정보 관리, 조직도 관리, 권한 관리(관리자 권한)</li>
            <li>🕒 <strong>근태 관리</strong>: 출퇴근 기록, 휴가 관리, 근무 현황 확인</li>
            <li>💼 <strong>CRM (고객관리)</strong>: 고객 데이터 관리, 거래 내역, 상담 기록 관리</li>
            <li>💰 <strong>자금 / 회계</strong>: 회계 처리, 비용 관리, 예산 관리</li>
            <li>✉️ <strong>메일</strong>: 사내/외 메일 발송 및 관리</li>
            <li>📁 <strong>ONEDDICE (네트워크 드라이브)</strong>: 파일 공유 및 중앙화 저장, 팀별 문서 관리</li>
            <li>📢 <strong>공지사항</strong>: 팀 및 회사 공지 등록 및 확인</li>
            <li>📅 <strong>일정 관리</strong>: 개인 및 팀 일정 관리, 캘린더 보기</li>
            <li>📝 <strong>전자결재</strong>: 문서 결재, 승인, 이력 관리</li>
            <li>📇 <strong>주소록</strong>: 사내/외 연락처 관리</li>
        </ul>
        <h3>🛠️ 기술 스택</h3>
        <h4>프론트엔드 (FE)</h4>
        <ul>
            <li>React 19.1.1</li>
            <li>Vite 7.1.5</li>
            <li>MUI 7.3.1</li>
            <li>Emotion 11.14.1</li>
            <li>React Router 7.8.2</li>
            <li>Axios 1.11.0</li>
            <li>FullCalendar 6.1.19</li>
            <li>React Big Calendar 1.19.4</li>
            <li>Recharts 3.1.2</li>
        </ul>
        <h4>백엔드 (BE, 개발 예정)</h4>
        <ul>
            <li>Spring Boot 3.2.0</li>
            <li>Docker 24.0.5</li>
            <li>AWS 2025</li>
        </ul>
        <h3>🖥️ 개발 환경</h3>
        <ul>
            <li>OS: Arch Linux, Mac</li>
            <li>Node.js: v22.12.0</li>
            <li>npm: 최신 버전</li>
            <li>브라우저: Chrome / Firefox 등</li>
        </ul>
        <h3>🌐 배포</h3>
        <p><strong>배포 URL:</strong> <a href="https://isekai-archive.kro.kr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>https://isekai-archive.kro.kr</a></p>
        <p><strong>문의:</strong> 배포 URL 접속 → 상단 문의 페이지 접속 → Email 아이콘 클릭</p>
        <p>⚠️ 현재 프론트엔드만 구현되어 있으며, 백엔드 개발 완료 후 배포될 예정입니다.</p>
        <a href="https://github.com/pudhy070/Isekai_Archive-Group-Ware" target="_blank" rel="noopener noreferrer" className="modal-github-link">GitHub에서 보기</a>
    </div>
);

const SiaBotPythonContent = () => (
    <div className="dev-archive-content">
        <h2>🤖 Sia Discord Bot (Python)</h2>
        <p><strong>discord.py 라이브러리를 기반으로 제작된 다기능 디스코드 봇</strong></p>
        <hr style={{ borderColor: 'rgba(0, 123, 255, 0.2)', margin: '20px 0' }} />

        <p>음악, 프로필, 서버 관리 등 다양한 기능을 통해 디스코드 서버를 더욱 편리하고 활기차게 만들어줍니다.</p>

        <h3>✨ 주요 기능</h3>
        <ul>
            <li>🎵 <strong>음악 기능</strong>: 유튜브 링크나 검색을 통해 노래를 재생하고, 대기열을 관리할 수 있습니다. (수정중)</li>
            <li>👤 <strong>사용자 기능</strong>: 자신의 프로필을 확인하거나 다른 사용자의 정보를 볼 수 있습니다.</li>
            <li>⚙️ <strong>서버 관리</strong>: 신규 유저 자동 역할 부여, 메시지 청소 등 서버 관리를 돕는 기능이 포함되어 있습니다.</li>
            <li>📢 <strong>공지 기능</strong>: 지정된 채널에 간편하게 공지를 보낼 수 있습니다.</li>
            <li>💬 <strong>AI 기능</strong>: 챗봇 채널을 설정하여 봇과 자유롭게 대화할 수 있습니다.</li>
            <li>👋 <strong>환영 인사</strong>: 새로운 멤버가 서버에 참여하면 자동으로 환영 DM을 보냅니다.</li>
        </ul>

        <h3>🚀 시작하기</h3>
        <h4>사전 준비</h4>
        <ul>
            <li>Python 3.10 이상</li>
            <li>Git</li>
        </ul>

        <h4>설치 및 실행 방법</h4>
        <p><strong>1. 프로젝트 클론하기</strong></p>
        <pre><code>git clone https://github.com/pudhy070/SiaBot.git</code></pre>

        <p><strong>2. 필요한 라이브러리 설치</strong></p>
        <pre><code>pip install -r requirements.txt</code></pre>

        <p><strong>3. 환경 변수 설정</strong></p>
        <p>main.py와 같은 위치에 config.py 파일을 생성하고 아래 내용을 채워주세요.</p>
        <pre><code>{`BOT_TOKEN = "여기에_봇_토큰을_입력하세요"\nDEV_ID = 123456789012345678`}</code></pre>

        <p><strong>4. 봇 실행하기</strong></p>
        <pre><code>python main.py</code></pre>

        <h3>📘 주요 명령어</h3>
        <h4>일반 기능</h4>
        <ul>
            <li><code>/help</code>: 봇의 모든 명령어 목록</li>
            <li><code>/개발자정보</code>: 봇 개발자 정보</li>
        </ul>

        <h4>음악 기능 (수정중)</h4>
        <ul>
            <li><code>/play</code>: 노래 재생 (URL 또는 검색어)</li>
            <li><code>/pause</code>: 일시정지</li>
            <li><code>/skip</code>: 다음 곡으로</li>
            <li><code>/queue</code>: 재생 대기열 확인</li>
        </ul>

        <h4>사용자 기능</h4>
        <ul>
            <li><code>/myprofile</code>: 자신의 프로필 카드 확인</li>
            <li><code>/report</code>: 유해 사용자 신고</li>
            <li><code>/view_profile</code>: 다른 사용자 프로필 보기</li>
        </ul>

        <p><strong>💡 Tip:</strong> Sia Bot Kotlin version과 함께 사용하면 효과가 만점입니다!</p>

        <a href="https://github.com/pudhy070/SiaBot" target="_blank" rel="noopener noreferrer" className="modal-github-link">GitHub에서 보기</a>
    </div>
);

const SiaBotKotlinContent = () => (
    <div className="dev-archive-content">
        <h2>🤖 SiaBot - All-in-One Discord Bot (Kotlin)</h2>
        <p><strong>서버 관리를 자동화하고, 멤버들에게 다양한 즐길 거리를 제공하는 강력한 다기능 디스코드 봇</strong></p>
        <hr style={{ borderColor: 'rgba(0, 123, 255, 0.2)', margin: '20px 0' }} />

        <p>Kotlin과 JDA 라이브러리를 기반으로 제작되었으며, 커뮤니티를 활성화하는 모든 기능을 제공합니다.</p>

        <h3>✨ 주요 기능 카테고리</h3>

        <h4>⚙️ 기본 및 정보 기능</h4>
        <ul>
            <li><code>!help</code>: 모든 명령어 목록</li>
            <li><code>!ping</code>: 봇 응답 속도 확인</li>
            <li><code>!info</code>: 서버 상세 정보</li>
            <li><code>!userinfo</code>: 멤버 정보 확인</li>
            <li><code>!profile</code>: 레벨, 경험치, 코인 프로필</li>
            <li><code>!avatar</code>: 프로필 사진 크게 보기</li>
        </ul>

        <h4>💰 경제 및 레벨 시스템</h4>
        <p>채팅 활동을 통해 보상을 얻고 사용하는 재미를 더합니다.</p>
        <ul>
            <li><code>!balance</code>: 현재 코인 잔액 확인</li>
            <li><code>!daily</code>: 24시간마다 무료 코인 받기</li>
            <li><code>!leaderboard</code>: 레벨/코인 순위 보기</li>
            <li><code>!give</code>: 다른 사용자에게 코인 송금</li>
            <li><code>!shop</code>: 아이템 상점</li>
            <li><code>!buy [아이템번호]</code>: 아이템 구매</li>
        </ul>

        <h3>⚡ 개발 정보</h3>
        <ul>
            <li><strong>개발자</strong>: Sia(_harumin)</li>
            <li><strong>라이브러리</strong>: JDA</li>
            <li><strong>언어</strong>: Kotlin</li>
            <li><strong>데이터 저장</strong>: 조만간 추가 예정</li>
        </ul>

        <a href="https://github.com/pudhy070/Discord_Bot_Kotlin" target="_blank" rel="noopener noreferrer" className="modal-github-link">GitHub에서 보기</a>
    </div>
);

const AIReportContent = () => (
    <div className="dev-archive-content">
        <h2>📄 AI 프로젝트 보고서 생성기</h2>
        <p><strong>간단한 GUI를 통해 프로젝트 정보를 입력하면, OpenAI API를 활용하여 체계적인 PDF 보고서를 자동 생성</strong></p>
        <hr style={{ borderColor: 'rgba(0, 123, 255, 0.2)', margin: '20px 0' }} />

        <h3>✨ 주요 기능</h3>
        <ul>
            <li>🎨 <strong>직관적인 GUI</strong>: CustomTkinter를 사용한 현대적이고 사용하기 쉬운 인터페이스</li>
            <li>🤖 <strong>자동 보고서 생성</strong>: AI가 서론, 본론, 결론을 포함한 보고서 초안을 작성</li>
            <li>🔐 <strong>AI 탐지 우회 프롬프트</strong>: 자연스러운 프롬프트로 AI 생성 티를 최소화</li>
            <li>📄 <strong>PDF 변환</strong>: Pandoc과 LaTeX을 통해 목차가 포함된 깔끔한 PDF 생성</li>
            <li>👁️ <strong>실시간 미리보기</strong>: 생성된 PDF를 앱 내에서 즉시 페이지별로 미리보기</li>
            <li>🌏 <strong>다국어 지원</strong>: 한국어, 영어, 일본어 중 선택 가능</li>
        </ul>

        <a href="https://github.com/pudhy070/AI_Project_Report" target="_blank" rel="noopener noreferrer" className="modal-github-link">GitHub에서 보기</a>
    </div>
);

const modalContents = {
    devArchive: <DevArchiveContent />,
    isekaiCard: <IsekaiCardContent />,
    isekaiArchive: <IsekaiArchiveContent />,
    siaBotPython: <SiaBotPythonContent />,
    siaBotKotlin: <SiaBotKotlinContent />,
    aiReport: <AIReportContent />,
};

const Modal = ({ contentId, closeModal }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [closeModal]);

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="modal active" onClick={handleOutsideClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={closeModal}>&times;</button>
                {modalContents[contentId] || <p>내용을 불러올 수 없습니다.</p>}
            </div>
        </div>
    );
};

export default Modal;