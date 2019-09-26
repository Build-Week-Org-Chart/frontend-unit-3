import React from 'react';
import { NavLink } from 'react-router-dom';
import { render } from 'react-dom'

const DashboardHeader = () => {

    return (
        <div className="headerDiv">
            <div className="headerItems">
                <div>
                    {/* title */}
                    <h2>Streemly</h2>
                </div>
                <div>
                    {/* Add Employee Form */}
                    <button className="headerButtons">Add Employee</button>
                </div>
                <div>
                    {/* Request Form */}
                    <button className="headerButtons">Submit Form</button>
                </div>
                <div>
                    {/* Search Form (inactive */}
                    <h3>Search Bar Here</h3>
                </div>
            </div>
        </div>
    )
}

render(<DashboardHeader />, document.getElementById('root'))

export default DashboardHeader