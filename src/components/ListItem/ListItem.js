import { Item, Status, Name } from 'components/FriendList/FriendList.styled';

export const ListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <Item key={id}>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
