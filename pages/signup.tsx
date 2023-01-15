import Usesign from  '../hooks/Usesignin'
// import Button from "@/components/Button"
export default function signup()
{
  const{
    name,
    setname,
    email,
    setemail,
    password,
    setpassword,
    onSubmitHandler,

  }=Usesign()

    return(
        
        <div className="row justify-content-center mt-5">
        <div className="col-md-2">
        <h2>signup page</h2>
    name<br/><input type="text"  onChange={(e)=>setname(e.target.value)}   placeholder="enter your name"/><br/>
        email <br/><input type="email" onChange={(e)=>setemail(e.target.value)}  placeholder="enter your email" />
       password <br/> <input type="password" onChange={(e)=>setpassword(e.target.value)}  placeholder="enter your password" />
       <br/>
        {/* <Button onClick={} data1="signup"/> */}
        {/* <Button onClick={onSubmitHandler}>signup</Button> */}
        <button onClick={onSubmitHandler}>signup</button>
        
        </div>
    </div>
    )
}