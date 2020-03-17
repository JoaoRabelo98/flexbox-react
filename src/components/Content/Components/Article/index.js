import React from 'react';

import { StyledArticle, StyledBox } from './styles';

const Article = () =>{
  return (
    <StyledArticle>
      <StyledBox >
        <p>Every paragraph, one box</p>
      </StyledBox>
      <StyledBox >
        <p>Every paragraph, one box</p>
      </StyledBox>
      <StyledBox >
        <p>Every paragraph, one box</p>
      </StyledBox>
      <StyledBox >
        <p>Every paragraph, one box</p>
      </StyledBox>
    </StyledArticle>
  );
};

export default Article;
