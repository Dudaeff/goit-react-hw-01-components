import PropTypes from 'prop-types';
import {
  UserCard,
  Avatar,
  AboutUser,
  Name,
  Stats,
  StatsItem,
  StatsQty,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserCard>
      <AboutUser>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </AboutUser>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <StatsQty>{followers}</StatsQty>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsQty>{views}</StatsQty>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsQty>{likes}</StatsQty>
        </StatsItem>
      </Stats>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.string,
  views: PropTypes.string,
  likes: PropTypes.string,
};
