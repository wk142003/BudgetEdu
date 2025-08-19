import { Link } from 'react-router-dom';

export default function Introduction() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="text-7xl text-center text-blue-500 pb-4">
                Welcome to BudgetEdu!
            </div>
            <p className="p-4 text-xl text-center max-w-3xl">
                Learn more about Budgeting, its advantages and disadvantages as well as some budgeting strategies to keep your spending and savings in check!
            </p>
            <Link to="/what-is-budgeting" className='self-center'>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Click here to find out more!
                </button>
            </Link>
        </div>
    )
}