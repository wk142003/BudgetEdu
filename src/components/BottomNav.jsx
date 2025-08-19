import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
    // Start by defining the page order
    const pages = [
        { name: "Introduction", path: "/" },
        { name: "What is Budgeting", path: "/what-is-budgeting" },
        { name: "Advantages", path: "/advantages" },
        { name: "Disadvantages", path: "/disadvantages" },
        { name: "Budgeting Strategies", path: "/budgeting-strategies" }
    ];

    // get curr location
    const location = useLocation();
    const currIdx = pages.findIndex(page => page.path === location.pathname);

    const prevPage = (currIdx < 0) ? pages[currIdx - 1] : null;
    const nextPage = (currIdx < pages.length - 1) ? pages[currIdx + 1] : null;
    
    return (
        <nav className="bottom-0 left-0 right-0 shadow-t-md py-3">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
                {/*Previous Button*/}
                <Link
                    to={prevPage ? prevPage.path : '#'}
                    className={`flex flex-col items-center text-gray-700 ${
                        prevPage ? 'hover:text-blue-600' : 'opacity-50 cursor-not-allowed'
                    }`}
                    // prevents the default changing of page (expected behaviour) from happening if there is no previous page
                    onClick={event => !prevPage && event.preventDefault()}
                >
                    {/*renders as <*/}
                    <span className="text-6xl">&lt;</span>
                    <span className="text-2xl mt-1">{prevPage ? prevPage.name : ''}</span>
                </Link>

                {/*Next Button*/}
                <Link
                    to={nextPage ? nextPage.path : "#"}
                    className={`flex flex-col items-center text-gray-700 ${
                        nextPage ? 'hover:text-blue-600' : 'opacity-50 cursor-not-allowed'
                    }`}
                    onClick={event => !nextPage && event.preventDefault()}
                >
                    <span className="text-6xl">&gt;</span>
                    <span className="text-2xl mt-1">{nextPage ? nextPage.name : ''}</span>
                </Link>
            </div>
        </nav>
    )
}

export default BottomNav;