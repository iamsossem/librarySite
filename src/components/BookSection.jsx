import React, { useState } from 'react';
import BookCard from './BookCard';
import './BookSection.css';

const BookSection = () => {
  const [activeTab, setActiveTab] = useState('recommended');

  const tabs = [
    { id: 'recommended', name: '추천도서' },
    { id: 'new', name: '신작도서' },
    { id: 'popular', name: '인기도서' },
  ];

  const books = [
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

  return (
    <section className="book-section" aria-labelledby="book-section-title">
      <div className="container">
        <h2 id="book-section-title" className="sr-only">도서 목록</h2>
        
        <div className="book-section-header">
          <p className="section-small-title">엄선된 도서 컬렉션</p>
          <h3 className="section-main-title">지금, 이 책</h3>
        </div>
        <div className="tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div 
          id={`panel-${activeTab}`}
          role="tabpanel" 
          aria-labelledby={`tab-${activeTab}`}
          className="book-list"
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
