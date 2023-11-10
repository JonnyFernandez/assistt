import React from 'react';
import style from './DashboardEntry.module.css';

const DashboardEntry = ({ title, description, image }) => {
  return (
      <div className="">
        
    <div className={style.dashboardEntry}>
      <div className={style.entryImage}>
        <img src={image} alt="Entry" className={style.entryImage} />
      </div>
      <div className={style.entryDetails}>
        <h2 className={style.entryTitle}>{title}</h2>
        <p className={style.entryDescription}>{description}</p>
      </div>
    </div>
      </div>
  );
};

export default DashboardEntry;

  
