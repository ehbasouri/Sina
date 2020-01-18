import React from 'react';
import './App.css';
import Tabbar from './js/component/TabBar/Tabbar.jsx';
import Header from './js/component/common/haeder/Header.jsx';
import SheetComponent from './js/component/common/sheetComponent/SheetComponent.jsx';

function App() {
  return (
    <>
      <Header/>
      <Tabbar/>
      <SheetComponent/>
    </>
  );
}

export default App;
