import { Section, Title, List, Item } from './Statistics.styled';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/Utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
    
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{backgroundColor: getRandomHexColor()}}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Item>
          )})}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
