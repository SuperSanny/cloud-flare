import { Route, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/table" element={<Page2 />} />
    </Routes>
  );
};

export default App;
