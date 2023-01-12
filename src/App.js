import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.page";
import Hotel from "./pages/hotel/Hotel,page";
import List from "./pages/list/List.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
