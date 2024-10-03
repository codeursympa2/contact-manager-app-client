import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import NoPage from "./pages/noPage";
import HomePage from "./pages/home/home";
import AddPage from "./pages/addPage";
import UpdatePage from "./pages/updatePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route index element={<HomePage />} />
          <Route path="add" element={<AddPage />} />
          <Route path="update/:id" element={<UpdatePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
