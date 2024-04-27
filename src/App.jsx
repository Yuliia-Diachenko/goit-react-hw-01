import Profile from './components/profile/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';


function App() { 
  return (
    <>
    <Profile userData = {userData}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions} />
    </>  
  )
}
export default App;
