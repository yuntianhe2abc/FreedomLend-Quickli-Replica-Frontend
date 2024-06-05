export type inputType = "amount" | "quantity" | "rate";
export default interface FieldInterface {
  id: string;
  label: string;
  variant?: string;
  type: inputType;
}
