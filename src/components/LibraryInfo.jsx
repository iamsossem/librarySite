import React from 'react';
import './LibraryInfo.css';

const LibraryInfo = () => {
  return (
    <section className="library-info" aria-labelledby="lib-info-title">
      <div className="container">
        <div className="info-content">
          <h2 id="lib-info-title" className="info-title">
            함께 읽고,<br />함께 성장합니다.
          </h2>
          <p className="info-description">
            수원시 도서관에서는 매주 작가와의 만남, 독서 토론, 어린이 창의 수업 등 
            다양한 문화 프로그램이 열리고 있습니다. 당신의 새로운 영감을 지금 찾아보세요.
          </p>
        </div>

        <div className="info-buttons">
          <button className="info-btn" aria-label="도서관 행사 안내 페이지로 이동">
            도서관 행사 안내
          </button>
          <button className="info-btn" aria-label="도서관 소식지 구독 페이지로 이동">
            도서관 소식지 구독
          </button>
        </div>
      </div>
    </section>
  );
};

export default LibraryInfo;
