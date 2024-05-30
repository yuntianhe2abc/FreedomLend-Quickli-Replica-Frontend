import { SxPropsStyles } from "@/theme/globalStyle.js";

export const singleInstanceStyles: SxPropsStyles = {
  container: {
    minWidth: "170px",
    width: "170px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textFieldGroups: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
};
