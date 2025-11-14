import React, { useState, useEffect, useCallback, useRef } from 'react';
import CMatrix from './CMatrix';
import WarpEffect from './WarpEffect';

const LockScreen = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('Awaiting input...');
    const [isError, setIsError] = useState(false);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [lockoutTime, setLockoutTime] = useState(null);
    const [isSystemOut, setIsSystemOut] = useState(false);
    const [isLockedOut, setIsLockedOut] = useState(false);
    const inputRef = useRef(null);
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
            setMessage('System Out');
            setIsLockedOut(true);
            setTimeout(() => {
                setIsSystemOut(true);
            }, 500); // Show "System Out" for a moment before black screen
            return;
        }

        const timerId = setInterval(() => {
            setLockoutTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timerId);
    }, [lockoutTime, isLockedOut]);

    useEffect(() => {
        // Focus the invisible input on mount and when it's not locked out
        if (!isLockedOut && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isLockedOut]);

    useEffect(() => {
        if (password.length === 4) {
            checkPassword();
        }
    }, [password, checkPassword]);
    
    const handleContainerClick = () => {
        if (!isLockedOut && inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        // Allow only numbers
        if (/^[0-9]*$/.test(value) && value.length <= 4) {
            setPassword(value);
        }
    };

    return (
        <div className="lock-screen-container" onClick={handleContainerClick}>
            {isSystemOut && <div className="screen-off-effect" />}
            {isUnlocking && <WarpEffect />}
            {isError && <CMatrix />}
            {!isSystemOut && (
                <div
                    className={`terminal ${isError ? 'terminal-error' : ''}`}
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
                        <input
                            ref={inputRef}
                            type="tel" // Use "tel" for a numeric keypad on mobile
                            className="hidden-input"
                            value={password}
                            onChange={handleInputChange}
                            onBlur={() => inputRef.current && inputRef.current.focus()} // Re-focus on blur
                            autoFocus
                            maxLength="4"
                        />
                        <span className="password-input">{password.padEnd(4, '_')}</span>
                    </div>
                    <p className={`status-message ${message.includes('DENIED') ? 'denied' : ''} ${message.includes('GRANTED') ? 'granted' : ''}`}>
                        Status: {message}
                    </p>
                </div>
            </div>
            )}
        </div>
    );
};

export default LockScreen;