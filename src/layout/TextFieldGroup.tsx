import React from "react";
import Input from "@mui/material/Input";
import { Box } from "@mui/material";
import FieldInterface from "@/type/FieldInterface";

const ariaLabel = { "aria-label": "description" };

const TextFieldGroup = ({ fields }: { fields: FieldInterface[] }) => {
  return (
    <Box>
      {fields.map((field) => {
        const { id, label, type } = field;
        return (
          <Input
            id={id}
            key={id}
            inputProps={{ min: 0 }}
            type={type}
            placeholder={label}
          />
        );
      })}
    </Box>
  );
};

export default TextFieldGroup;
