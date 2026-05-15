import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    } else {
      navigate('/search');
    }
  };

  const quickMenus = [
    { id: 1, name: '내가 빌린 책 보기', icon: '📖', label: '대출 현황 확인' },
    { id: 2, name: '책 배달 서비스', icon: '🚚', label: '도서 배달 신청' },
    { id: 3, name: '단골도서관', icon: '❤️', label: '자주 가는 도서관 관리' },
    { id: 4, name: '통합 도서관 검색', icon: '📍', label: '주변 도서관 검색' },
  ];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-banner">
        <img src="/hero-bg-v2.png" alt="" className="hero-bg-img" aria-hidden="true" />
        <div className="hero-overlay"></div>
        
        {/* Search Bar inside Banner */}
        <form className="hero-search-container container" onSubmit={handleSearch}>
          <div className="hero-search-box">
            <input 
              type="text" 
              placeholder="어떤 책을 찾으세요?" 
              className="hero-search-input"
              aria-label="도서 검색"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="search-actions">
              <button type="button" className="search-icon-btn mic-btn" aria-label="음성 검색">
                🎤
              </button>
              <button type="submit" className="search-icon-btn find-btn" aria-label="검색 실행">
                🔍
              </button>
            </div>
          </div>
        </form>
      </div>
      
      <div className="hero-card-container container">
        <div className="hero-floating-card">
          <div className="hero-text-content">
            <h2 id="hero-title" className="hero-main-title">
              수원시 도서관에 오신 것을 환영합니다.
            </h2>
            <p className="hero-sub-text">
              지식과 문화가 공존하는 공간,<br />
              일상을 더 풍요롭게 만드는 당신의 파트너 입니다.
            </p>
            <button className="library-view-button" aria-label="전체 도서관 목록 보기">
              전체 도서관 보기 &gt;
            </button>
          </div>

          <div className="hero-quick-grid" role="group" aria-label="주요 서비스 바로가기">
            {quickMenus.map((menu) => (
              <button key={menu.id} className="hero-grid-item" aria-label={menu.label}>
                <div className="grid-icon" aria-hidden="true">{menu.icon}</div>
                <span className="grid-text">{menu.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
