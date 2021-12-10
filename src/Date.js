import React from "react";
import styled from 'styled-components';

const StyledDate = styled.div`
  color: ${pr => pr.theme.secondaryColor};
  background-color: black; 
  padding: 1%;
  border-radius: 30px;
  border-style: dashed;
  border-width: 10px;
  display: flex;
  flex-flow: column wrap;
  align-content: center; 
  font-size: 2em;
  border-color: ${pr => pr.theme.quaternaryColor};
`

const Date = (props) => {

  const { date } = props;

  return (
    <StyledDate>
      <div className="date">{date}</div>
    </StyledDate>
  );
};

export default Date;