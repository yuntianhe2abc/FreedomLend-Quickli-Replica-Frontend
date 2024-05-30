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
export interface LoanInterface {
  id: string;
  loanAmount: string;
  lendingInterestRate: string;
  commitmentTerm: string;
  interestOnlyTerm: string;
}

export type Section = "applicants" | "loans" | "shareable loans";
