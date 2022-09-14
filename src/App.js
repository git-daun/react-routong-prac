import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>라우팅연습</h1>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:id" element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
