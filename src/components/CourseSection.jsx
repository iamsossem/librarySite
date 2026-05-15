import React from 'react';
import './CourseSection.css';

const CourseSection = () => {
  return (
    <section className="course-section" aria-labelledby="course-section-title">
      <div className="container">
        <h2 id="course-section-title" className="sr-only">도서관 강좌 안내</h2>
        
        <div className="course-card">
          <div className="course-image-wrapper">
            <img 
              src="/course-img.png" 
              alt="도서관 문화 클래스 현장" 
              className="course-image"
            />
          </div>
          
          <div className="course-info-card">
            <div className="course-stat">
              <span className="course-count">120+</span>
            </div>
            <p className="course-description">
              이번달 진행되는 오프라인<br />
              문화 클래스와 전시회 개수
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
