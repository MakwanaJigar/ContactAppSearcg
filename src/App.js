import './App.css';
import Responsive from './component/Responsive';
import CreateContact from './component/CreateContact';
import MyContacts from './component/MyContacts';
import EditContact from './component/EditContact';
import ViewContacts from './component/ViewContacts';
import {
  Route,
  Routes
} from "react-router-dom";
import Login from './Login/Login';
import { ToastContainer } from 'react-toastify';
import Registration from './Login/Registration';



function App() {

//   // cors origin starts here 

// const cors= require('cors');
// const express = require('express');

// const corsOptions ={origin : ['http://localhost:5000/user'],};
// App.use(cors(corsOptions));


// const app = express();

// // Set up middleware or routes
// // ...

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

// cors origin ends here


return (
    <div className="App">
     <ToastContainer></ToastContainer>
     
     <Responsive />
      
        <Routes>
        <Route path='/createuser' element={<Registration />}/>
          <Route path='/Mycontact' element={<MyContacts />}/>
          <Route path='/createcontacts' element={<CreateContact />}/>
          <Route path='/' element={<Login />}/>
          <Route path='/EditContact/:contactId' element={<EditContact />}/>
          <Route path='/ViewContacts/:contactId' element={<ViewContacts/>}/>
        </Routes>
      

    </div>
  );
}

export default App;
