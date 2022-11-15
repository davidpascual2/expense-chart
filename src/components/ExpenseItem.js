import './ExpenseItem.css'

function ExpenseItem(props) {
    //in regular js we use parameters to pass data into functions 
    
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item-desc'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;