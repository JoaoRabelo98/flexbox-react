import React from 'react';

import { StyledArticle, StyledBox, StyledParagraph } from './styles';

const Article = () =>{
  return (
    <StyledArticle>
      <StyledBox >
        <StyledParagraph>Each paragraph, one box</StyledParagraph>
      </StyledBox>
      <StyledBox >
        <StyledParagraph>Each paragraph, one box</StyledParagraph>
      </StyledBox>
      <StyledBox >
        <StyledParagraph>Each paragraph, one box</StyledParagraph>
      </StyledBox>
      <StyledBox >
        <StyledParagraph>Each paragraph, one box</StyledParagraph>
      </StyledBox>
      <StyledBox >
        <StyledParagraph>Each paragraph, one box</StyledParagraph>
      </StyledBox>
    </StyledArticle>
  );
};

export default Article;
