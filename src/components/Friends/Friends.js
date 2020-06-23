import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css'

function Friends({friends}) {
    return(
            <div className={style.wrapper}>
                <ul className={style.list}>
                    {friends.map(friend => 
                        <li key={friend.id} className={style.listItem}>
                            <span className={friend.isOnline ? style.statusOn : style.statusOff}></span>
                            <img className={style.avatar} src={friend.avatar} alt={friend.name}/>
                            <p className={style.name}>{friend.name}</p>
                        </li>
                    )}
                    
                </ul>    
            </div>
    )
}
Friends.defaultProps = {
    
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string
        })
    )
}

export default Friends