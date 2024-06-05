import * as React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import TextField from "@mui/material/TextField";
import FieldInterface, { inputType } from "@/utils/interfaces/FieldInterface";
import InputAdornment from "@mui/material/InputAdornment";
import { BootstrapInput } from "@/components/NonShareableCommitment/components/CommitmentType/CommitmentTypeSelectInput";
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const AmountFormat = React.forwardRef<NumericFormatProps, CustomProps>(
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
  if (type === "amount") {
    return (
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        name="numberformat"
        id={id}
        size="small"
        InputProps={{
          inputComponent: AmountFormat as any,
          inputProps: { maxLength: 10 },
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        sx={{ width: "100%" }}
        variant="standard"
      />
    );
  } else if (type === "rate") {
    return (
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        name="numberformat"
        id={id}
        size="small"
        InputProps={{
          inputProps: { maxLength: 6 },
          endAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
        sx={{ width: "100%" }}
        variant="standard"
      />
    );
  } else {
    return (
      <TextField
        label={label}
        value={value}
        onChange={handleChange}
        name="numberformat"
        id={id}
        size="small"
        sx={{ width: "100%" }}
        InputProps={{
          inputProps: { maxLength: 3 },
        }}
        variant="standard"
      />
    );
  }
};
export default NumericrInput;
