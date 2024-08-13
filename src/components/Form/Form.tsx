import { useState, ChangeEvent } from "react";
import "./FormStyles";
import { Button, Container, Input, InputContent, Label, RadioGroup } from "./FormStyles";
import Grid from "../Grid/Grid";

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

interface FormProps {
  handleAdd: (transaction: {
    id: number;
    desc: string;
    amount: string;
    expense: boolean;
  }) => void;
  transactionsList: any[]; // Ajuste o tipo conforme a estrutura real dos itens
  setTransactionsList: (list: any[]) => void; // Ajuste o tipo conforme a estrutura real dos itens
}

const Form: React.FC<FormProps> = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isExpense, setExpense] = useState<boolean>(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    const numericAmount = parseFloat(amount);

    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    }

    if (numericAmount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc,
      amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  const handleDescChange = (e: InputChangeEvent) => setDesc(e.target.value);
  const handleAmountChange = (e: InputChangeEvent) => setAmount(e.target.value);
  const handleRadioChange = (e: InputChangeEvent) => setExpense(e.target.value === "expense");

  return (

    <>
      <Container>
        <InputContent>
          <Label>Descrição</Label>
          <Input value={desc} onChange={handleDescChange} />
        </InputContent>

        <InputContent>
          <Label>Valor</Label>
          <Input value={amount} type="number" onChange={handleAmountChange} />
        </InputContent>

        <RadioGroup>
          <Input
            id="rIncome"
            type="radio"
            value="income"
            checked={!isExpense}
            name="group1"
            onChange={handleRadioChange}
          />
          <Label htmlFor="rIncome">Entrada</Label>

          <Input
            id="rExpense"
            type="radio"
            value="expense"
            checked={isExpense}
            name="group1"
            onChange={handleRadioChange}
          />
          <Label htmlFor="rExpense">Saída</Label>
        </RadioGroup>

        <Button onClick={handleSave}>ADICIONAR</Button>

      </Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>

  );
};

export default Form;
