
import React from "react";
import '../DataTable/Posts.css'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading.....</h2>
    }
    return (
        <>
            <div className="Data-cont">
                <table key={posts.id} id="cd">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Population</th>
                            <th>Active Cases</th>
                            <th>cases(per million)</th>
                            <th>Total cases</th>
                            <th>Total Deaths</th>
                            <th>Total Recovered</th>

                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((
                            {Country,Population,ActiveCases,TotCases_1M_Pop,TotalCases,TotalDeaths,TotalRecovered}
                        ) => {
                            return <tr>
                                <td>{Country}</td>
                                <td>{Population}</td>
                                <td>{ActiveCases}</td>
                                <td>{TotCases_1M_Pop}</td>
                                <td>{TotalCases}</td>
                                <td>{TotalDeaths}</td>
                                <td>{TotalRecovered}</td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Posts;
