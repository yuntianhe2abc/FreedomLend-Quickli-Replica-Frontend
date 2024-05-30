export type inputType = "money" | "number";
export default interface FieldInterface {
  id: string;
  label: string;
  variant?: string;
  type: inputType;
}
