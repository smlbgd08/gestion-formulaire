import { useState } from 'react';
import './App.css';
import LoginFrom from './component/Login';
import RegisterForm from './component/RegistreForm';


function App() {

  const [form , setForm] = useState('loginForm')

  const changeForm = (formName)=>{
    setForm(formName)
  }

  return (
    <div className="App">
      {
       form ==='loginForm' ?  
        <LoginFrom swithForm={changeForm} /> :
         <RegisterForm swithForm={changeForm} />
      }
     
      
    </div>
  );
}
export default App;
