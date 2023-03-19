import "./App.css";
import { Backgrounds, Audio } from "./Context";
import Ouside from "./pages/Outside";
import DataAudio from "./data/audio.json";
import DataBackgrounds from "./data/background.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <Backgrounds.Provider value={{ DataBackgrounds }}>
      <Audio.Provider value={{ DataAudio }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Ouside />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Audio.Provider>
    </Backgrounds.Provider>
  );
}

export default App;
