import BasicForm from "./components/BasicForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/contactUs" element={<BasicForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
