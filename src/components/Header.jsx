import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  
  // Home (/)과 SearchResults (/search) 에서만 Header를 보여줌
  const showHeader = location.pathname === '/' || location.pathname === '/search';

  if (!showHeader) return null;

  return (
    <header className="header">
      <div className="header-top">
        {/* Left: Menu Button */}
        <button className="icon-button" aria-label="메뉴 열기">
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 6H32M4 12H32M4 18H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Center: Logo */}
        <Link to="/" className="logo-group" aria-label="수원시 도서관 홈으로 이동">
          <img src="/logo.png" alt="" className="logo-img" width="44" height="48" aria-hidden="true" />
          <h1 className="logo-text">수원시 도서관</h1>
        </Link>

        {/* Right: User Button */}
        <button className="icon-button" aria-label="마이페이지">
          <svg width="28" height="40" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="14" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 32C4 26.4772 8.47715 22 14 22C19.5228 22 24 26.4772 24 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
