import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: column;
row-gap: 5px;
align-items: space-around;
width: 270px;
margin: 0 auto;
margin-bottom: 50px;
padding: 8px;

background-color: white; 
  border: 2px solid darkgray;
  border-radius: 4px;
`;

export const Item = styled.li`
display: flex;
align-items: center;
column-gap: 15px;
padding: 8px;
padding-left: 15px;

  border: 2px solid darkgray;
  border-radius: 4px;
  box-shadow: 1px 1px 4px  black;
`;

export const Status = styled.span`
width: 14px;
height: 14px;
background-color: ${(props) => props.status ? 'green' : 'red'};
border-radius: 50%;
`;

export const Name = styled.p`
font-size: 20px;
font-weight: 700;
`;