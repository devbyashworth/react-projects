import { useState, useEffect } from "react";
import Expenses from "./Expenses";
import ExpenseChart from "./ExpenseChart";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    date: Date.now(),
    description: "",
    amount: "",
    type: "",
  });
  const [sortBy, setSortBy] = useState("");

  // Update local storage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: type === "radio" ? (checked ? value : prevExpense.type) : value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setExpense({ date: "", description: "", amount: "", type: "" });
  };

  const handleSort = (event) => {
    const sortType = event.target.value;

    setSortBy(sortType); // Update the selected sort type

    const sortedExpenses = [...expenses].sort((a, b) => {
      if (sortType === "date") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortType === "type") {
        return a.type.localeCompare(b.type); // Sort alphabetically
      } else if (sortType === "amount") {
        return a.amount - b.amount; // Sort numerically
      }
      return 0;
    });

    setExpenses(sortedExpenses);
  };

  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);

  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);

  const balance = (totalIncome - totalExpense).toFixed(2);

  return (
    <>
      <main className="container">
        <h1>Expenses Tracker</h1>
        <div className="content">
          <div className="form-container">
            <form className="expenses-form" onSubmit={handleSubmit}>
              {/* Date Input */}
              <div className="form-input">
                <label htmlFor="date">Date: </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleChange}
                  value={expense.date}
                  required
                />
              </div>

              {/* Description Input */}
              <div className="form-input">
                <label htmlFor="description">Description: </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="description"
                  onChange={handleChange}
                  value={expense.description}
                  required
                />
              </div>

              {/* Amount Input */}
              <div className="form-input">
                <label htmlFor="amount">Amount: </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  onChange={handleChange}
                  value={expense.amount}
                  required
                />
              </div>

              {/* Type Radio Buttons */}
              <div className="form-input">
                <label>Type: </label>
                <input
                  type="radio"
                  name="type"
                  value="income"
                  onChange={handleChange}
                  checked={expense.type === "income"}
                  required
                />
                Income
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  onChange={handleChange}
                  checked={expense.type === "expense"}
                  required
                />
                Expense
              </div>

              <button className="form-button" type="submit">
                Add
              </button>
            </form>
          </div>

          {/* Expenses Chart */}
          {expenses.length > 0 && (
            <ExpenseChart
              totalIncome={totalIncome}
              totalExpense={totalExpense}
              balance={balance}
            />
          )}
        </div>

        {/* Expenses List */}
        {expenses.length > 0 && (
          <div className="expenses-list">
            <Expenses
              expenses={expenses}
              handleSort={handleSort}
              sortBy={sortBy}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
