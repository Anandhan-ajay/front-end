import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import UpdateUser from "./pages/editUser";
import NotFoundPage from "./pages/notFound/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
