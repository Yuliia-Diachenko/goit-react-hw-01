import Profile from './components/profile/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

function App() { 
  return (
    <>
    <Profile userData = {userData}/>
    <FriendList friends={friends}/>
    </>  
  )
}
export default App
