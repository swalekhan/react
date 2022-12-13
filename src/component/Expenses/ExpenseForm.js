import './ExpenseForm.css'
const ExpenseForm = () =>{
    const changeHandler =(e)=>{
        console.log(e.target.value)
    }

    return (
        <div className="outer-div">
            <div className="inner-div">
            <form>
                <p>
                <label>ExpenseTitle</label><br/>
                <input type="text" onChange={changeHandler}/><br/>
                </p>
                <p>
                <label>ExpenseTitle</label><br/>
                <input type="text" onChange={changeHandler}/><br/>
                </p>
                <p>
                <label>ExpenseTitle</label><br/>
                <input type="text" onChange={changeHandler}/><br/>
                </p>
                <input type="submit"/>
            </form>
            </div>
        </div>
    )
}
export default ExpenseForm;