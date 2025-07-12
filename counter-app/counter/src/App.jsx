import { CounterPage } from "./pages/CounterPage";
import './App.css';

const App = ()=>{
  return (
    <div className="counter-app-container">
      <h1 className="counter-title">Counter App</h1>
      <CounterPage />
    </div>
  )
}
export default App;