import css from './Profile.module.css';

function Profile({userData:{username, tag, location, avatar, 
    stats: {followers, views, likes}}}) {
   return ( 
    <div className={css.container}>
            <div>
                <img className={css.image}
                src={avatar}
                alt="User avatar" width='200' />
                <p className={css.name}>{username}</p>
                <p className={css.info}>@{tag}</p>
                <p className={css.info}>{location}</p>
            </div>
        <ul className={css.likee}>
            <li className={css.item}>
                <span>Followers</span>
                <span className={css.nameItems}>{followers}</span>
            </li>
            <li className={css.item}>
                <span>Views</span>
                <span className={css.nameItems}>{views}</span>
            </li>
            <li className={css.item}>
                <span>Likes</span>
                <span className={css.nameItems}>{likes}</span>
            </li>
        </ul>
    </div>
    )
}
export default Profile;