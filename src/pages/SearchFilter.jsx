import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './SearchFilter.css';

const SearchFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentQuery = queryParams.get('q') || '';

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="search-filter-page">
      <Header />
      
      <main className="container main-content">
        <div className="filter-header">
          <button className="back-btn" onClick={handleClose} aria-label="뒤로가기">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h2 className="page-title">도서검색</h2>
        </div>

        <div className="filter-content">
          <div className="search-query-display">
            <span className="query-text">{currentQuery || '나의 행복'}</span>
          </div>

          <section className="filter-section">
            <h3 className="section-title">대출상태</h3>
            <div className="filter-options flex">
              <button className="filter-chip">전체보기</button>
              <button className="filter-chip selected">대출가능</button>
            </div>
          </section>

          <section className="filter-section">
            <h3 className="section-title">카테고리</h3>
            <div className="filter-options grid-3">
              <button className="filter-chip selected">전체선택</button>
              <button className="filter-chip">소설</button>
              <button className="filter-chip">과학 서적</button>
              <button className="filter-chip">자기계발서</button>
              <button className="filter-chip">역사책</button>
              <button className="filter-chip">문제집</button>
              <button className="filter-chip">어린이</button>
              <button className="filter-chip">만화책</button>
              <button className="filter-chip">요리책</button>
            </div>
          </section>

          <section className="filter-section">
            <h3 className="section-title">발행연도</h3>
            <div className="year-range-container">
              <div className="year-slider-bar">
                <div className="year-slider-track"></div>
                <div className="year-slider-handle start"></div>
                <div className="year-slider-handle end"></div>
              </div>
              <div className="year-labels">
                <div className="year-label-group">
                  <span className="year-label-type">FROM</span>
                  <span className="year-label-value">2025.04</span>
                </div>
                <div className="year-label-group align-right">
                  <span className="year-label-type">TO</span>
                  <span className="year-label-value">2025.05</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="filter-footer">
          <button className="footer-btn reset-btn">초기화</button>
          <button className="footer-btn apply-btn" onClick={handleClose}>적용하기</button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchFilter;
