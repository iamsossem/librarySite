import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookCard from '../components/BookCard';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';

  // Mock data for search results (filtering from the main list)
  const allBooks = [
    {
      id: 1,
      category: '에세이',
      title: '나의 행복',
      author: '이영지',
      status: 'available',
      cover: '/book1.png'
    },
    {
      id: 2,
      category: '소설',
      title: '밤의 숲',
      author: '김민수',
      status: 'unavailable',
      cover: '/book2.png'
    },
    {
      id: 3,
      category: '자기개발',
      title: '꿈을 이루다',
      author: '최수진',
      status: 'unavailable',
      cover: '/book3.png'
    }
  ];

  const results = allBooks.filter(book => 
    book.title.includes(query) || book.category.includes(query)
  );

  return (
    <div className="search-results-page">
      <Header />
      
      <main className="container main-content">
        <section className="search-header">
          <div className="search-title-group">
            <span className="search-label">검색결과</span>
            <h1 className="search-query">{query || '전체 도서'}</h1>
            <p className="search-count">검색결과 : {results.length.toString().padStart(2, '0')}권</p>
          </div>
          
          <button 
            className="filter-button" 
            aria-label="검색 필터 조건 설정"
            onClick={() => navigate(`/search/filter?q=${query}`)}
          >
            <div className="filter-icon" aria-hidden="true">
              <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5H31M7 14.5H26M13 24H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="filter-text">조건</span>
          </button>
        </section>

        <div className="results-list">
          {results.length > 0 ? (
            results.map(book => (
              <BookCard key={book.id} book={book} />
            ))
          ) : (
            <p className="no-results">검색 결과가 없습니다.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;
