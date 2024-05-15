import React from "react";
import styled from "styled-components";
import SingleApplicant from "./SingleApplicant/SingleApplicant";

const StyledApplicantList = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  gap: 16px;
`;
const ApplicantList = ({ numOfApplicants }) => {
  return (
    <StyledApplicantList>
      {Array.from({ length: numOfApplicants }, (_, index) => (
        <SingleApplicant key={index} index={index} />
      ))}
    </StyledApplicantList>
  );
};
export default ApplicantList;
