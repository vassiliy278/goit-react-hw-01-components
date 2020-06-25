import React from 'react';
import PropTypes from 'prop-types';
import style from './friends.module.css'
import FriendListItem from './FriendListItem'

function Friends({friends}) {
    return(
            <div className={style.wrapper}>
                <ul className={style.list}>
                    {friends.map(friend => 
                        <FriendListItem
                        name={friend.name}
                        avatar={friend.avatar}
                        isOnline={friend.isOnline}
                        key={friend.id}
                    />)}
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