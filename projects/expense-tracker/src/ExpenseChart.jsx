import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const expenseChart = PropTypes.shape({
  totalIncome: PropTypes.func,
  totalExpense: PropTypes.func,
  balance: PropTypes.number,
});

function ExpenseChart({ totalIncome, totalExpense, balance }) {
  const data = {
    labels: ["Income", "Expense", "Balance"],
    datasets: [
      {
        label: "Income vs Expense",
        data: [totalIncome, totalExpense, balance],
        backgroundColor: ["#4caf50", "#f44336", "#1a1a1a"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="expenses-chart">
      <Pie data={data} />
    </div>
  );
}

ExpenseChart.propTypes = {
  totalIncome: expenseChart,
  totalExpense: expenseChart,
  balance: expenseChart,
};

export default ExpenseChart;
