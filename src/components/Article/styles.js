import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  flex-grow: 12;
  background-color: lightcoral; 
  height: 70%;
  justify-content: center;
  align-items: center;
`;

export const StyledBox = styled.div`
  display: flex;
  width: 20%;
  height: 90%;
  margin: 10px 10px;
  background: #fff;
  border-radius: 20px;
  background-color: lightgreen;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const StyledParagraph = styled.p`
  margin: 5px;
`;
