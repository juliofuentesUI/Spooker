import React from 'react';
import classes from './Ticker.module.css';

const Ticker = (props) => {

  return (
    <div className={classes.ticker}>
      <div className={classes.tickerText}>
        LYCORIS<span>-APPAREL-</span> 
      </div>
      <div className={classes.tickerText}>
        LYCORIS<span>-APPAREL-</span>
      </div>
      <div className={classes.tickerText}>
        LYCORIS<span>-APPAREL-</span>
      </div>
    </div>
  )

};

export default Ticker;