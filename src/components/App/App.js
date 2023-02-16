import user from 'Data/user';
import data from 'Data/data';
import friends from 'Data/friends.json';
import transactions from 'Data/transactions.json';
import { Profile } from '../Profile/Profile';
import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionTable } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />
      <TransactionTable items={transactions} />
    </Container>
  );
};
