const LoginFrom = (props)=>{

    return (
        <div>
            <h1>Login composant</h1>
<form >

  <div className="container">
    <label ><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" />

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />

    <div className="row">
    <button type="submit" className="col-md-4 m-2">Login</button>
    <button type="submit" onClick={()=>props.swithForm('RegistreForm')} className="col-md-4 m-2 btn btn-primary">Sign up </button>
     </div>

    <label>
      <input type="checkbox"  name="remember" /> Remember me
    </label>
  </div>
</form>
            
        </div>
    )


}

export default LoginFrom ;