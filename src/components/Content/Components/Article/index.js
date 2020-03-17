import React from 'react';

import { StyledArticle, StyledBox } from './styles';

const Article = () =>{
  return (
    <StyledArticle>
      <StyledBox >
        <p>Each paragraph, one box</p>
      </StyledBox>
      <StyledBox >
        <p>Each paragraph, one box</p>
      </StyledBox>
      <StyledBox >
        <p>Each paragraph, one box</p>
      </StyledBox>
      <StyledBox >
        <p>Each paragraph, one box</p>
      </StyledBox>
    </StyledArticle>
  );
};

export default Article;
