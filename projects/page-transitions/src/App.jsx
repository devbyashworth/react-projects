import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preview from "./Components/Preview";
import Root from "./Components/Root";
import Home from "./Components/Home";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="preview" element={<Preview />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
