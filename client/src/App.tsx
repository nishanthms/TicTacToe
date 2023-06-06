import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import Home from './Pages/Home';
import Game from './Pages/Game';
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'Game', element: <Game /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
