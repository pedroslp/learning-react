import { useState } from 'react'

export function TwitterFollowCard({ children, username, initialIsFollowing }) {
  const [isFollowing, setFisFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleAction = () => setFisFollowing(!isFollowing)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${username}`}
          alt='User image'
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleAction}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-unFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
