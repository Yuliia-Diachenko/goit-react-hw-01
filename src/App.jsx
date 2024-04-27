import Profile from './components/profile/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';
import css from './App.module.css';

function App() { 
  return (
    <div className={css.container}>
    <Profile userData = {userData}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={transactions} />
    </div>  
  )
}
export default App;
