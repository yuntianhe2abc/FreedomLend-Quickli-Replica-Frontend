import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ApplicantInterface {
  id: string;
  annualBaseIncome: string;
  annualNonBaseIncome: string;
  annualBonusIncome: string;
  monthlyLivingExpenses: string;
  monthlyOtherExpenses: string;
  childSupport: string;
  monthlyRent: string;
  index?: number;
}
interface FormInterface {
  applicants: ApplicantInterface[];
}
const initialApplicantData: ApplicantInterface = {
  id: uuidv4(),
  annualBaseIncome: "",
  annualNonBaseIncome: "",
  annualBonusIncome: "",
  monthlyLivingExpenses: "",
  monthlyOtherExpenses: "",
  childSupport: "",
  monthlyRent: "",
};
const initialState: FormInterface = { applicants: [initialApplicantData] };
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addApplicant: (state) => {
      if (state.applicants.length < 3) {
        const newApplicant = { ...initialApplicantData, id: uuidv4() };
        const newApplicants = [...state.applicants, newApplicant];
        state.applicants = newApplicants;
      }
    },
    deleteApplicant: (state, action) => {
      const { applicantId } = action.payload;
      const filter = state.applicants.filter(
        (applicant) => applicant.id !== applicantId
      );
      state.applicants = filter;
    },
    updateApplicant: (state, action) => {
      const { newAttributes } = action.payload;
      const oldApplicantIndex = state.applicants.findIndex(
        (aplicant) => aplicant.id === newAttributes.id
      );
      const oldApplicant = state.applicants[oldApplicantIndex];
      const newApplicant = { ...oldApplicant, newAttributes };
      state.applicants[oldApplicantIndex] = newApplicant;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addApplicant,
  deleteApplicant,
  updateApplicant,
} = formSlice.actions;
export default formSlice.reducer;
