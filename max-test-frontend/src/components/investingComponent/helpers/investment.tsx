import { UserInputProps } from "../interfaces/UserInputProps";

export function calculateInvestment(investmentObject: UserInputProps) {
    const annualData = [];
    let investmentValue = investmentObject.initialInvestment;

    for (let i = 0; i < investmentObject.duration; i++) {
        const interestEarnedInYear = investmentValue * (investmentObject.expectedReturn / 100);
        investmentValue += interestEarnedInYear + investmentObject.annualInvestment;
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: investmentObject.annualInvestment
        });
    }

    return annualData;
}

export const formatter = new Intl.NumberFormat("es-Us", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });