import {Routes, Route} from 'react-router-dom';
import {Layout} from "./Layout";

import './App.css';
import {CreateUser, Users} from "./components";


function App() {
  return (
    <div className="App">
     <Routes>
         <Route path={'/'} element={<Layout/>}>
             <Route index element={<Users/>}/>
             <Route path={'user/create'} element={<CreateUser/>}/>
         </Route>
     </Routes>
    </div>
  );
}

export {App};
