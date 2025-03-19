import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage, DashboardPage, NoRoute} from "./pages";
import "./App.css";
import "./styles/header.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<DashboardPage />} />
        <Route path="*" element={<NoRoute />} /> {/* Catch-all for 404 */}
      </Routes>
    </Router>
  );
}

export default App;
