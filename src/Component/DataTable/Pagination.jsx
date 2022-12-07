import React from "react";
import '/Users/admin/CovidAppProject/COVID-APP-GROUP-R1/src/Component/DataTable/Pagination.css'

const Pagination=({postsPerPage,totalPosts,paginate})=>{
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
return(
    <>
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number=>(
                <li key={number} className="page-item">
                </li>
            ))}
        </ul>
    </nav>

    </>
)
}
export default Pagination;