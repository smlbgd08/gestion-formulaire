const RegisterForm = (props)=>{

    return (
        <div>
            <h1>Registre composant</h1>

<form >

  <div className="container">

  <label ><b>nom</b></label>
    <input type="text" placeholder="Enter Username" name="nom" />


    <label ><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" />

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />

<div className="row">
    <button type="submit" className="col-md-4 m-2">Sign up</button>
    <button type="submit" onClick={()=>props.swithForm('loginForm')} className="col-md-4 m-2">Login</button>
     </div>
  
    <label>
      <input type="checkbox"  name="remember" /> Remember me
    </label>
  </div>
</form>
            
        </div>
    )


}

export default RegisterForm ;