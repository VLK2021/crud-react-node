import {Routes, Route} from 'react-router-dom';
import {Layout} from "./Layout";

import './App.css';
import {CreateUser, UpdateComponent, Users} from "./components";


function App() {
  return (
    <div className="App">
     <Routes>
         <Route path={'/'} element={<Layout/>}>
             <Route index element={<Users/>}/>
             <Route path={'user/create'} element={<CreateUser/>}/>
             <Route path={'user/:id'} element={<UpdateComponent/>}/>
         </Route>
     </Routes>
    </div>
  );
}

export {App};
