// Staff.js
import React from "react";
import styled from "styled-components";

const StyledStaff = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StaffCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }
`;

const Staff = ({ staffList }) => {
  return (
    <StyledStaff>
      {staffList.map((staff, index) => (
        <StaffCard key={index}>
          <h3>{staff.name}</h3>
          <p>{staff.position}</p>
          {/* Add more details or actions as needed */}
        </StaffCard>
      ))}
    </StyledStaff>
  );
};

export default Staff;
