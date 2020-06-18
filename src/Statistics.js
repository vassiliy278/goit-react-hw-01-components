import React from 'react';
import PropTypes from 'prop-types';
import style from './statistics.module.css'


const num = (Math.floor(Math.random() * (255 - 100 + 100) + 100));
const num2 = (Math.floor(Math.random() * (255 - 100 + 100) + 100));
const num3 = (Math.floor(Math.random() * (255 - 100 + 100) + 100));



console.log(num)

function Statistics({title, stats}) {
    return(
        <section className={style.wrapper}>
        {title ? <h2 className={style.title}>{title}</h2> : ''}
        <ul className={style.statList}>
            {stats.map(e => 
                <li className={style.statElement} key={e.id} style={{backgroundColor: `rgb(${num-e.percentage}, ${num2-e.percentage*2}, ${num3})`}}>
                    <span className={style.label}>{e.label}</span>
                    <span className={style.percentage}>{e.percentage}%</span>
                </li>
                )}
        </ul>
      </section>
    )
}

Statistics.defaultProps = {
}

Statistics.prototype = {

}
export default Statistics