import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchableList from './components/SearchableList';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchableList />
  </React.StrictMode>
);
