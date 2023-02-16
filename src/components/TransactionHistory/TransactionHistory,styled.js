import styled from "@emotion/styled";

export const Table = styled.table`
width: 700px;
margin: 0 auto;
border-spacing:0;

background-color: white;
border: 2px solid darkgray;
border-radius: 4px;
`;

export const Head = styled.thead`
height: 50px;
background-color: lightseagreen;
color: white;
`;

export const Heading = styled.th`
border-right: 1px solid white;
`;

export const Body = styled.tbody`
text-align: center;
`;

export const InfoRow = styled.tr`
height: 50px;
background-color: white;

:nth-of-type(2n){
    background-color: whitesmoke;
}
`;

export const Info = styled.td`
padding: 8px;
color: gray;
border: 1px solid lightgray;
`;

