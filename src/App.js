//example test
// import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    {
      title: "car insurance",
      amount: "123.33",
      date: new Date(2021, 7, 14)
    },
    {
      title: "food",
      amount: "145.03",
      date: new Date(2021, 5, 19)
    },
    {
      title: "gas",
      amount: "301.24",
      date: new Date(2021, 3, 8)
    }
  ]
  return (
    <div className="App">
      <h2>lets get started</h2>

      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount} 
      date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount} 
        date={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount} 
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
