import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    username: 'pedroslp',
    name: 'Pedro',
    initialIsFollowing: true,
  },
  {
    username: 'janedoe',
    name: 'Jane',
    initialIsFollowing: false,
  },
  {
    username: 'johndoe',
    name: 'John',
    initialIsFollowing: false,
  },
]

export function App() {
  return (
    <section className='App'>
      {users.map(({ username, name, initialIsFollowing }) => (
        <TwitterFollowCard
          key={username}
          username={username}
          initialIsFollowing={initialIsFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
