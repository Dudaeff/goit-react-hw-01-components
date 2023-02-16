import styled from '@emotion/styled';

export const Section = styled.section`
  width: 270px;
  margin: 0 auto;
   margin-bottom: 50px;

  background-color: white;
  border: 2px solid darkgray;
  border-radius: 4px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: gray;

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 51.5px;
  height: 50px;
  column-gap: 4px;
  justify-content: center;
  align-items: center;

  padding: 8px;
  color: white;
`;

