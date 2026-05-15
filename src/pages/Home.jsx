import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BookSection from '../components/BookSection';
import LibraryInfo from '../components/LibraryInfo';
import CourseSection from '../components/CourseSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main id="main-content">
        <Hero />
        <BookSection />
        <LibraryInfo />
        <CourseSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
