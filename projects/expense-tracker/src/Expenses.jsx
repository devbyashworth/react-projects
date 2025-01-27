import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSearch } from "@fortawesome/free-solid-svg-icons";
import jsPDF from "jspdf";
import "jspdf-autotable";

const expensesPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })
);

const Expenses = ({ expenses = [], handleSort, sortBy }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const totalIncome = expenses
    .filter((expense) => expense.type === "income")
    .reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0)
    .toFixed(2);

  const totalExpense = expenses
    .filter((expense) => expense.type === "expense")
    .reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0)
    .toFixed(2);

  const balance = (totalIncome - totalExpense).toFixed(2);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Date", "Description", "Amount", "Type"];
    const tableRows = expenses.map(({ date, description, amount, type }) => [
      date,
      description,
      amount,
      type,
    ]);

    doc.text("Expenses Report", 14, 15);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("expenses-report.pdf");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <div className="expenses-content">
        <div className="expense-header">
          <div className="left-column">
            <h3>Expenses</h3>
          </div>
          <div className="right-column">
            <button className="btn" onClick={handleDownloadPDF}>
              <FontAwesomeIcon icon={faDownload} /> Download PDF
            </button>
            <input
              type="text"
              placeholder="Search by description"
              className="search-box"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
        </div>
      </div>
      <div className="filtering">
        <label htmlFor="filter">Sort by: </label>
        <select
          name="filter"
          id="filter"
          className="filter"
          onChange={handleSort}
          value={sortBy}
        >
          <option value="">None</option>
          <option value="date">Date</option>
          <option value="type">Type</option>
          <option value="amount">Amount</option>
        </select>
      </div>
      <div className="expense-content">
        <div className="content-header">
          <h2 className="sub-header">Date</h2>
          <h2 className="sub-header">Description</h2>
          <h2 className="sub-header">Amount</h2>
          <h2 className="sub-header">Type</h2>
        </div>
        {(searchTerm.length > 0 ? filteredExpenses : expenses).map(
          ({ id, date, description, amount, type }) => (
            <div className="content-body" key={id}>
              <p className="sub-body">{date}</p>
              <p className="sub-body">{description}</p>
              <p className="sub-body">{amount}</p>
              <p className="sub-body">{type}</p>
            </div>
          )
        )}
        <div className="content-footer">
          <p className="sub-foot">Income: {totalIncome}</p>
          <p className="sub-foot">Expense: {totalExpense}</p>
          <p className="sub-foot">Balance: {balance}</p>
        </div>
      </div>
    </>
  );
};

Expenses.propTypes = {
  expenses: expensesPropType,
  handleSort: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
};

export default Expenses;
