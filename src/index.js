import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import user from './user.json';
import Statistics from './Statistics';
import statisticalData from './statistical-data.json';
import Friends from './Friends';
import friends from './friends.json';
import transactions from './transactions_story.json'
import Transaction from './Transaction'

ReactDOM.render(
  <Fragment>
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
  </Fragment>,
  document.getElementById('root')
);
console.log(transactions)