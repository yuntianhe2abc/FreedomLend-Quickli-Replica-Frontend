import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import TextField from "@mui/material/TextField";
import FieldInterface, { inputType } from "@/utils/interfaces/FieldInterface";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
const NumericFormatMoney = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  }
);
const NumericFormatNumber = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
      />
    );
  }
);
const NumericrInput = ({ field }: { field: FieldInterface }) => {
  const [value, setValue] = React.useState("");
  const { id, label, type } = field;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  if (type === "money") {
    return (
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        name="numberformat"
        id={id}
        size="small"
        InputProps={{
          inputComponent: NumericFormatMoney as any,
        }}
        variant="standard"
      />
    );
  } else if (type === "number") {
    return (
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        name="numberformat"
        id={id}
        size="small"
        InputProps={{
          inputComponent: NumericFormatNumber as any,
        }}
        variant="standard"
      />
    );
  }
};
export default NumericrInput;
