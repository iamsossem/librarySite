import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  const isAvailable = book.status === 'available';

  return (
    <article className="book-card">
      <div className="book-cover-wrapper">
        <img src={book.cover} alt={`${book.title} 표지`} className="book-cover" loading="lazy" />
        <div className={`status-badge-top ${isAvailable ? 'available' : 'unavailable'}`}>
          {isAvailable ? '대출가능' : '대출중'}
        </div>
      </div>
      
      <div className="book-content">
        <div className="book-info">
          <p className="book-category">{book.category}</p>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>

        <div className="book-status-row">
          <div className={`status-label ${isAvailable ? 'available' : 'unavailable'}`}>
            <span className="status-icon">
              {isAvailable ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <span className="status-text">{isAvailable ? '대출가능' : '대출중'}</span>
          </div>
        </div>

        <div className="book-actions">
          <button className="action-btn primary-btn">상세보기</button>
          <button className="action-btn primary-btn" disabled={!isAvailable}>예약하기</button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
