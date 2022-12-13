import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState("ExpenseTitle")
    const [amount, setAmount] = useState("ExpenseAmount")
    const [date, setDate] = useState("ExpenseDate")

    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }


    const submitHendler = (e) => {
        e.preventDefault()

        let submitData = {
            title: title,
            amount: amount,
            data: new Date(date),
            // id: Math.random().toString()
        }

        props.onFormData(submitData)
        //    empty input box
        setAmount("")
        setDate("");
        setTitle("")
    }

    return (
        <div className="outer-div">
            <div className="inner-div">
                <form onSubmit={submitHendler}>
                    <p>
                        <label>title</label><br />
                        <input type="text" onChange={titleHandler} value={title} /><br />
                    </p>
                    <p>
                        <label>amount</label><br />
                        <input type="number" onChange={amountHandler} value={amount} /><br />
                    </p>
                    <p>
                        <label>date</label><br />
                        <input type="date" onChange={dateHandler} value={date} /><br />
                    </p>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
export default ExpenseForm;