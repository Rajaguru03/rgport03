import React from 'react';
import './App.css'
import Root from './WebUI/Root';
import { createBrowserRouter , createRoutesFromElements , Route, RouterProvider} from 'react-router-dom';
import Header from './components/Header';



function App(props){

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header/>}>
        <Route index element={<Root/>}/>
      </Route>
    )
  )

  return(
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;