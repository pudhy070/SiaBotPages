import React, { useState, useEffect, useCallback } from 'react';
import CMatrix from './CMatrix';
import WarpEffect from './WarpEffect';

const LockScreen = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('Awaiting input...');
    const [isError, setIsError] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [lockoutTime, setLockoutTime] = useState(null);
    const [isLockedOut, setIsLockedOut] = useState(false);
    const correctPassword = '3468';

    const checkPassword = useCallback(() => {
        if (password === correctPassword) {
            setMessage('ACCESS GRANTED');
            setIsError(false);
            setLockoutTime(null); // Stop timer on success
            setTimeout(() => {
                setIsUnlocking(true);
            }, 500); // Show "ACCESS GRANTED" for a moment
            setTimeout(() => {
                onUnlock();
            }, 2500); // Allow 2s for the warp animation
        } else {
            setMessage('ACCESS DENIED');
            setIsError(true);
            setPassword('');
            if (lockoutTime === null) setLockoutTime(30);

            // After showing DENIED, revert message to allow new input
            setTimeout(() => {
                if (!isLockedOut) setMessage('Awaiting input...');
            }, 1500);
        }
    }, [password, onUnlock, correctPassword, lockoutTime]);

    useEffect(() => {
        if (lockoutTime === null) return;

        if (lockoutTime === 0) {
            setIsLockedOut(true);
            setMessage('SYSTEM LOCKED');
            return;
        }

        const timerId = setInterval(() => {
            setLockoutTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timerId);
    }, [lockoutTime]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (isLockedOut || message === 'ACCESS GRANTED') {
                return;
            }

            if (e.key >= '0' && e.key <= '9' && password.length < 4) {
                setPassword(prev => prev + e.key);
            } else if (e.key === 'Backspace') {
                setPassword(prev => prev.slice(0, -1));
            } else if (e.key === 'Enter' && password.length === 4) {
                checkPassword();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [password, message, checkPassword, isLockedOut, isError]);

    useEffect(() => {
        if (password.length === 4) {
            checkPassword();
        }
    }, [password, checkPassword]);

    return (
        <div className="lock-screen-container">
            {isUnlocking && <WarpEffect />}
            {isLockedOut && <div className="screen-off-effect" />}
            {isError && <CMatrix />}
            <div className={`terminal ${isError ? 'terminal-error' : ''}`}
                 data-text={isError ? `Status: ${message}` : ''}>
                <div className="terminal-header">
                    <span>C:\\WINDOWS\\system32\\cmd.exe</span>
                </div>
                <div className="terminal-body">
                    <pre className="ascii-art">
                        {`
  _    _   ____    _    ____    ___   _   _   ____ 
 | |  | | |  _ \\  | |  |  _ \\  / _ \\ | | | | | __ )
 | |  | | | |_) | | |  | | | || | | || | | | |  _ \\
 | |__| | |  _ <  | |  | |_| || |_| || |_| | | |_) |
  \\____/  |_| \\_\\ |_|  |____/  \\___/  \\___/  |____/ 
                        `}
                    </pre>
                    <p>Enter security code to access the system.</p>
                    {lockoutTime !== null && !isLockedOut && (
                        <p className="timer-message">Time remaining: {lockoutTime}s</p>
                    )}
                    {isLockedOut && <p className="lockout-message">!! CRITICAL FAILURE !! SYSTEM ACCESS PERMANENTLY DENIED.</p>}
                    <div className="prompt">
                        <span>&gt; </span>
                        <span className="password-input">{password.padEnd(4, '_')}</span>
                    </div>
                    <p className={`status-message ${message.includes('DENIED') ? 'denied' : ''} ${message.includes('GRANTED') ? 'granted' : ''}`}>
                        Status: {message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LockScreen;