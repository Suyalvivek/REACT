import App from "./App";
import {createRoot} from "react-dom/client";
const div = document.querySelector("#root")
const root = createRoot(div)
root.render(<App/>)

