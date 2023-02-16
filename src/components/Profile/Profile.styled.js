import styled from '@emotion/styled';

export const UserCard = styled.div`
  width: 270px;
  margin: 0 auto;
  margin-bottom: 50px;

  background-color: lightgray;
  border: 2px solid darkgray;
  border-radius: 4px;
`;

export const AboutUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding-top: 20px;
  padding-bottom: 15px;

  background-color: white;
  color: grey;
  border-radius: 4px;
`;

export const Avatar = styled.img`
  width: 120px;
  heigth: 120px;

  margin-bottom: 15px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;

  color: black;
`;

export const Stats = styled.ul`
  display: flex;

  border-top: 2px solid darkgray;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 90px;
  padding: 5px 0;

  text-align: center;
  color: gray;
  border-right: 2px solid darkgray;

  :last-child {
    border-right: none;
  }
`;

export const StatsQty = styled.span`
  font-weight: 800;
  color: black;
`;
