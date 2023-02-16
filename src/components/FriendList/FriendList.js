import { Item, List, Name, Status } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Item key={id}>
            <Status status={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};
