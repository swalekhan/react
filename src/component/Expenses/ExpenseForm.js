import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () =>{
    const [title, setTitle] = useState("ExpenseTitle")
    const [amount, setAmount] = useState("ExpenseAmount")
    const [date, setDate] = useState("ExpenseDate")

    const titleHandler =(e)=>{
        setTitle(e.target.value)
    }
    const amountHandler =(e)=>{
        setAmount(e.target.value)
    }
    const dateHandler =(e)=>{
        setDate(e.target.value)
        console.log(e.target.value)
    }

    const clickHendler = (e)=>{
        e.preventDefault()
      let setShow ={
        t:title,
        a:amount,
        d:date
       }
       console.log(setShow)
    }
 
    return (
        <div className="outer-div">
            <div className="inner-div">
            <form onSubmit={clickHendler}>
                <p>
                <label>{title}</label><br/>
                <input type="text" onChange={titleHandler}/><br/>
                </p>
                <p>
                <label>{amount}</label><br/>
                <input type="number" onChange={amountHandler}/><br/>
                </p>
                <p>
                <label>{date}</label><br/>
                <input type="date" onChange={dateHandler}/><br/>
                </p>
                <input type="submit" />
            </form>
            </div>
        </div>
    )
}
export default ExpenseForm;