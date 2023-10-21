import Hero from "./components/Hero";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Hero />} />
      <Route exact path="/" element={<Login />} />
      <Route
        path="*"
        element={
          <div>
            <h1>404 BOZO</h1>
            <a href="/login" className="underline">
              <h2>Go Back</h2>
            </a>
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
