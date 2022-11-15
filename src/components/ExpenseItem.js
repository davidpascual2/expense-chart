import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 28th 2022</div>
            <div className='expense-item-desc'>
                <h2>Car Insurance</h2>
                <div className='expense-item-price'>$194.67</div>
            </div>
        </div>
    );
}

export default ExpenseItem;