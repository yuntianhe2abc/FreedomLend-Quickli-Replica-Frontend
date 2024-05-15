import React from "react";

const StyledInputGroup =
  styled.div <
  { $props } >
  `
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "#BF4F74"};
  width: ${(props) => props.$width || "200px"};
  gap: ${(props) => props.$gap || "16px"};
`;
const TextfieldGroup = ({ fields }) => {
  const { groupStyle } = fields;
  return (
    <StyledInputGroup props={groupStyle}>
      {fields.map((field) => {
        const { id, label, type, variant } = field;
        return (
          <TextField
            id={id}
            label={label}
            inputProps={{ type: { type }, min: 0 }}
            variant={variant}
          />
        );
      })}
    </StyledInputGroup>
  );
};

export default TextfieldGroup;
