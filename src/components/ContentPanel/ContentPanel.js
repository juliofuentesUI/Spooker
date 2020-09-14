import React from 'react';
import classes from './ContentPanel.module.css';

const ContentPanel = (props) => {
   return (
    <article className={classes.homeSlide}>
      <div className={classes.panelContent}>
        <div className={classes.linkBackdrop}></div>
        <div className={classes.textContainer}></div>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.imageWrapper}>
          <img />
        </div>
      </div>
    </article>
   );
};

export default ContentPanel;