import { useState } from "react"
import { Button } from "./components/Button"
import { Message } from "./components/Message"
import { getJoke } from "./services/api-client"
import './App.css';

const App = () => {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });
  const getJokesData = async () => {
    setJoke(await getJoke());
  }
  return (
    <div className="joke-app-container">
      <h1 style={{ color: "#5a67d8", marginBottom: "1.5rem" }}>😂 Joke Genie</h1>
      <Message joke={joke} />
      <Button fn={getJokesData} />
    </div>
  )
}
export default App;