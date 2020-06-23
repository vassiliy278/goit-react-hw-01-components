import React, { useReducer, Fragment } from 'react';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Stats/Statistics';
import statisticalData from './data/statistical-data.json';
import Friends from './components/Friends/Friends';
import friends from './data/friends.json';
import transactions from './data/transactions_story.json'
import Transaction from './components/Transactions/Transaction'

function App() {
  return (
    <>
    <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics
    title="Upload stats"
    stats={statisticalData}
    />
    <Friends friends={friends} />
    <Transaction list={transactions}/>
  </>
  );
}

export default App;
