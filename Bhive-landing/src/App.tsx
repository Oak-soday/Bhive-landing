import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header';
import SectionChooseUS from './components/cards/sectioncards';
import Workspace from './components/workspace/workspace';
import Appdownload from './components/sectiondownload/appdownload';
import Herobanner from './components/hero/sectionhero';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkspace } from './features/workstationSlice';

function App() {
  const state = useSelector((state: { workstation: Object }) => state.workstation);
  const dispatch = useDispatch();
  const JsonAPi = "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json";
  useEffect(() => {
    fetch(JsonAPi)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(addWorkspace(json));
      });
  }, [])


  return (
    <>
      <Header></Header>
      <Herobanner></Herobanner>
      <SectionChooseUS></SectionChooseUS>
      <Workspace state={state}></Workspace>
      <Appdownload state={state}></Appdownload>
      <footer className='footer'>
        <h6>{state?.footerTitle}</h6>
      </footer>
    </>
  )
}

export default App
