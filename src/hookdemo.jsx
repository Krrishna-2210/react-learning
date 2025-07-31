import React  from "react";
function Hookdemo() {
    const [counter,setCounter] = React.useState(0)
    const [msg,setMessage] = React.useState("")

    const incrementData = ()=>{
        if(counter>=5){
            setMessage("Sorry value is >=5")
        }else{
            setCounter(counter+1)
            setMessage("")
        }
    }
    const decrementData = ()=>{
        if(counter<=0){
            setMessage("Sorry value is <=0")
        }else{
            setCounter(counter-1)
            setMessage("")
        }
    }


return (<>
    <h1>Welcome to Hooks</h1>
    <h1>Counter Value is {counter}</h1>
    <input type="button" value="+" onClick={incrementData}/>
    <input type="button" value="-" onClick={decrementData}/>
    <input type="button" value="X" onClick={()=>setCounter(0)}/>
    {msg}

    </>)
}
export default Hookdemo