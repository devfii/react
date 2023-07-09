import React from 'react';
import {createRoot} from 'react-dom/client';
import FunFacts from './components/FunFacts';
import './facts.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <FunFacts />
);




