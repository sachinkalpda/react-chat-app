import { Route, Routes } from "react-router-dom";
import ChatSection from "./ChatSection";
import Layout from "./Layout";
import Home from "./Home";

function App() {
  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chat/:user/:room" element={<ChatSection />} />
        </Route>
      </Routes>

    </>



  );
}

export default App;
