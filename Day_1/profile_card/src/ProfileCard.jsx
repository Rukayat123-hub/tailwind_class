// File: src/components/ProfileCard/ProfileCard.jsx
import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="header"></div>
      <div className="avatar"></div>

      <div className="content">
        <div className="name">Odeleye Rukayat</div>
        <div className="title">Frontend Developer</div>
        <div className="location">Ogun State, Nigeria</div>

        <div className="stats">
          <div className="stat">
            <div className="stat-value">1.2k</div>
            <div className="stat-label">Followers</div>
          </div>
          <div className="stat">
            <div className="stat-value">58</div>
            <div className="stat-label">Posts</div>
          </div>
          <div className="stat">
            <div className="stat-value">4.7k</div>
            <div className="stat-label">Likes</div>
          </div>
        </div>

        <div className="bio">
          Passionate about building modern and accessible web applications. Always learning.
        </div>

        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default ProfileCard;

