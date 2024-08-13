import Form from "../../../../components/Form/Form";
import MenuDesktop from "../../../../components/MenuDesktop/MenuDesktop";
import Resume from "../../../../components/Resume/Resume";
import React, { useState, useEffect } from "react";

// Definindo a interface para a transação
interface Transaction {
  amount: string;
  expense: boolean;
}

const Home: React.FC = () => {
  // Tipagem do estado de transactionsList
  const [transactionsList, setTransactionsList] = useState<Transaction[]>(
    () => {
      const data = localStorage.getItem("transactions");
      return data ? JSON.parse(data) : [];
    }
  );

  const [income, setIncome] = useState<string>("R$ 0.00");
  const [expense, setExpense] = useState<string>("R$ 0.00");
  const [total, setTotal] = useState<string>("R$ 0.00");

  useEffect(() => {
    const amountExpense = transactionsList
      .filter(item => item.expense)
      .map(transaction => parseFloat(transaction.amount));

    const amountIncome = transactionsList
      .filter(item => !item.expense)
      .map(transaction => parseFloat(transaction.amount));

    const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const totalAmount = (parseFloat(totalIncome) - parseFloat(totalExpense)).toFixed(2);

    setIncome(`R$ ${totalIncome}`);
    setExpense(`R$ ${totalExpense}`);
    setTotal(`${parseFloat(totalIncome) < parseFloat(totalExpense) ? "-" : ""}R$ ${totalAmount}`);
  }, [transactionsList]);

  const handleAdd = (transaction: Transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <MenuDesktop />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
    </>
  );
};

export default Home;
