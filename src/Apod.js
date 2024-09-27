import React from "react";
import styled from 'styled-components';

const StyledApod = styled.div`
  /* padding: 10%; */
  border-radius: 30px;
  border-style: dashed;
  border-color: ${pr => pr.theme.tertiaryColor};
  border-width: 10px;
  display: flex;
  flex-flow: column wrap;
  align-content: center; 
  align-items: center;
  background-color: ${pr => pr.theme.primaryColor};
  color: ${pr => pr.theme.secondaryColor};
  font-size: 2em;
`

const StyledTitle = styled.div`
  padding: 5%;
  /* display: flex; */
`
const StyledDescription = styled.div`
  padding: 5%;
  /* display: flex; */
`
const Apod = (props) => {

  const {title, image, altImage, description} = props;

  return (
    <StyledApod>
      <StyledTitle>
        {title}
      </StyledTitle>
      {/* <div className="title">{title}</div> */}
      <div className="image">
        <img src={image} alt={altImage}></img>
      </div>
      <StyledDescription>{description}</StyledDescription>
    </StyledApod>
  );
};

export default Apod;
