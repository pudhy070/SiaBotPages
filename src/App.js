import React, { useState } from 'react';
import './Portfolio.css'; // 전역 스타일을 위한 CSS 파일을 임포트합니다.
import Home from './pages/Home'; // './pages/Home' 경로가 올바릅니다.
import LockScreen from './components/LockScreen';

// 만약 여러 페이지를 사용하게 된다면 여기에 React Router 설정을 추가할 수 있습니다.
function App() {
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleUnlock = () => {
        setIsUnlocked(true);
    };

    return (
        <div className="App">
            {isUnlocked ? (
                <Home />
            ) : (
                <LockScreen onUnlock={handleUnlock} />
            )}
        </div>
    );
}

export default App;