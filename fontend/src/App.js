import "./App.css";
import HomePage from "./components/page/HomePage";
import NavBar from "./components/layout/NavBar";
import { Route, Routes } from "react-router-dom";
import PostPage from "./components/page/PostPage";
import BoxSignup from "./components/layout/BoxSignup";
import BoxLogin from "./components/layout/BoxLogin";
import DetailPage from "./components/page/DetailPage";

function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <BoxAuth /> */}
      <Routes>
        <Route path="/" element={<DetailPage />} />
        <Route path="/create" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
