import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormComponent from "./src/components/FormComponent";

test('Render form properly', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    const positionLabel = getByText(/Título do cargo:/i);
    const salaryLabel = getByText(/Salário (R$):/i);
    const responsabilityLabel = getByText(/Atividades que o cargo exerce:/i);
    const benefitLabel = getByText(/Etapas do processo:/i);
    const stepLabel = getByText(/Habilidades necessárias:/i);
    const skillLabel = getByText(/Experiência necessária:/i);
    const contactLabel = getByText(/Entrar em contato pelo email:/i);
    expect(positionLabel).toBeInTheDocument()
    expect(salaryLabel).toBeInTheDocument()
   
})
