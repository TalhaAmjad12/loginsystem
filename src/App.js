import React, {useState} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light')
    const [alert, SetAlert] = useState(null)

    const ShowAlert = (message, type) => {
        SetAlert({
            msg: message,
            cat: type
        })

        setTimeout(() => {
            SetAlert(null)
        }, 2000)
    }

    const toggle = () => {
        if(mode === 'dark') {
            setMode('light')
            document.body.style.backgroundColor = 'white';
            ShowAlert("Light Mode Activated", "success")
        } else {
            setMode('dark')
            document.body.style.backgroundColor = 'grey';
            ShowAlert("Dark Mode Activated", "danger")
        }
    }

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar title = "Text Utils" mode={mode} toggle={toggle} />

      <div className="container">
          <Alert alert={alert} />

          <Routes>
              <Route exact path="/About" element={<About />} />
              <Route exact path="/" element={<TextForm mode={mode} showAlert={ShowAlert} />} />
          </Routes>

      </div>
        </BrowserRouter>

    </div>
  );
}

export default App;
