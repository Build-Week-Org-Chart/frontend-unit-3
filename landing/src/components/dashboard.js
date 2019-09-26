import React from "react"
import {render} from 'react-dom'
import DashboardHeader from "./dashboardComponents/dashboardHeader"
import CharaterList from './cardList/employeeList'
const Dashboard = () => {   

    return(
        <div>
        
        <DashboardHeader />
        
            <div className="cardContainer">
            <CharaterList />
            </ div>
        </div>
    )
};


render(<Dashboard />, document.getElementById('root'))
export default Dashboard