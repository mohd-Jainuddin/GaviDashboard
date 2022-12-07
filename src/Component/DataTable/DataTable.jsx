import {createContextApi} from '../DataTable/CreateContext'

import React, { useEffect, useState } from "react";
import { useContext } from "react";

import Posts from "../DataTable/Posts";


import '../DataTable/DataTab.css'
import '../DataTable/DataTable.css'


function DataTable() {
    const { coviddata} = useContext(createContextApi);


    // const [dataTab, setDataTab] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(5);
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const [enable, setEnable]=useState(false)
    const [secEnable, setsecEnable]=useState(false)
    const [postsPerPage] = useState(20)



    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(coviddata.length / itemsPerPage); i++) {
        pages.push(i);
    }


    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });


    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = coviddata.slice(indexOfFirstPost, indexOfLastPost)

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1)
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
        if(currentPage == pages[pages.length - 1]){
            setsecEnable(true)
        }else{
            setsecEnable(false)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit)

        }
        if(currentPage == pages[0]){
            setEnable(true)
        }else{
            setEnable(false)
        }
    }


    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextBtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip; </li>;
    }


    return (
        <>

            <div className="container">
                <h1>All Country Data</h1>
                <Posts posts={currentPosts} loading={loading} />

                {/* <Pagination postsPerPage={postsPerPage} totalPosts={dataTab.length} paginate={Paginate} /> */}
                <div className="dataCont">
                    <ul className="Pagenumbers">
                        <li className='li_li'>
                            {/* <button className="btn" onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}>Prev</button> */}
                            <button className="btn" onClick={handlePrevBtn} disabled={enable}>Prev</button>
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}

                        <li className='li_li'>
                            {/* <button className="btn" onClick={handleNextBtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</button> */}
                            <button className="btn" onClick={handleNextBtn} disabled={secEnable}>Next</button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )

}
export default DataTable;
