import React from 'react';
import PropTypes from 'prop-types';
import style from './profile.module.css'

function Profile({name, tag, location, avatar, stats}) {
    return(
            <div className={style.wrapper}>
                <section className={style.info}>
                    <img className={style.avatar} src={avatar} alt={name}></img>
                    <h2>{name}</h2>
                    <p className={style.description}>@{tag}</p>
                    <p className={style.description}>{location}</p>
                </section>
                <section className={style.stats}>
                    <div className={style.statsElement}>
                        <p className={style.statsName}>Followers</p>
                        <h3 className={style.statsValue}>{stats.followers}</h3>
                    </div>
                    <div className={style.statsElement}>
                        <p className={style.statsName}>Views</p>
                        <h3 className={style.statsValue}>{stats.likes}</h3>
                    </div>
                    <div className={style.statsElement}>
                        <p className={style.statsName}>Likes</p>
                        <h3 className={style.statsValue}>{stats.views}</h3>
                    </div>
                </section>
            </div>
    )
}
Profile.defaultProps = {
    avatar: 'https://dummyimage.com/320x240/2a2a2a/ffffff&text=Product+image+placeholder',
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}
export default Profile