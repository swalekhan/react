import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.item.length === 0) {
        return <h2>No data found</h2>
    }

    if (props.item.length > 0) {
        return <ul className='expenses-list'>
         {props.item.map((e) => {
            return <ExpenseItem
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
            />
        })}
        </ul>
    }
}

export default ExpensesList;