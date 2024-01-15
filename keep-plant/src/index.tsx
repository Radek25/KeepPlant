import React from 'react';
import ReactDOM from 'react-dom/client';
import { KeepPlantApp } from './KeepPlantApp';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <KeepPlantApp/>
  </React.StrictMode>
);
