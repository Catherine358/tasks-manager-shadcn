import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import TaskQueue from "./pages/TaskQueue.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TaskQueue />} />
            {/*<Route path="/task/:id" element={<TaskDetails />} />*/}
        </Routes>
    </BrowserRouter>
  )
}

export default App
