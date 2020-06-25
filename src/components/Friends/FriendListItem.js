import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css'


function FriendListItem({avatar, name, isOnline}) {
    return(
        <>
            <li className={style.listItem}>
                <span className={isOnline ? style.statusOn : style.statusOff}></span>
                <img className={style.avatar} src={avatar} alt={name}/>
                <p className={style.name}>{name}</p>
            </li>
        </>
    )
}

FriendListItem.propTypes = {
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string
        }

export default FriendListItem