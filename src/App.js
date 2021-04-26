import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import Grid from './components/Grid';
import Modal from './components/Modal'
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from "styled-components";

const LightTheme = {
  backgroundColor: "white",
  color:"black"
};

const DarkTheme = {

  backgroundColor: "#282c36",
  color:"white"
}



const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {


  const [selectedImg, setSelectedImg] = useState(null);
  const [theme, setTheme] = useState("light")
  var value = themes[theme].color;
  console.log("theme", themes[theme].color);
  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const Toggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;   
  border-radius: 50%;
  border: none;
  ${'' /* background-color: ${theme.titleColor}; */}
  ${'' /* color: ${theme.pageBackground}; */}
  &:focus {
      outline: none;
  }
  transition: all .5s ease;
`;

  console.log(themes[theme]);

  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
  return (
    <>
      <div className="main" style={themes[theme]} >
        <div className="App">
          <ThemeProvider theme={themes[theme]}>
            <div>
            
              <h1 style={{ textAlign: "center" ,marginTop:'0'}}>PhotoApp</h1>
              <p style={{ textAlign: "center" }}>Upload photo here By clicking following button</p>
              <div style={{ textAlign: "center" }}>
                <Toggle onClick={changeTheme}>
                  {icon}
                </Toggle>
              </div>
              <UploadForm />
              <Grid setSelectedImg={setSelectedImg} />
              {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
              )}
            </div>
          </ThemeProvider>
        </div>
      </div>
    </>
  );




}




export default App;
