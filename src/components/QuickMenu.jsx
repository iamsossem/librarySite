import React from 'react';
import './QuickMenu.css';

const QuickMenu = () => {
  const menus = [
    { id: 1, name: '통합검색', icon: '🔍', label: '모든 도서 및 자료 통합검색' },
    { id: 2, name: '내 서재', icon: '📚', label: '대출 목록 및 예약 도서 확인' },
    { id: 3, name: '알림사항', icon: '🔔', label: '도서관 소식 및 공지사항' },
    { id: 4, name: '시설예약', icon: '🗓️', label: '스터디룸 및 디지털실 예약' },
  ];

  return (
    <nav className="quick-menu container" aria-label="빠른 메뉴">
      <ul className="quick-menu-list">
        {menus.map((menu) => (
          <li key={menu.id} className="quick-menu-item">
            <button className="quick-menu-button" aria-label={menu.label}>
              <div className="icon-circle" aria-hidden="true">
                <span className="icon-text">{menu.icon}</span>
              </div>
              <span className="menu-name">{menu.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default QuickMenu;
