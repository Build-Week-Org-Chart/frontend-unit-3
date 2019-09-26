import React from "react";
import { render } from 'react-dom';
import { withFormik, Form, Field } from "formik";
// import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; 

const AddEmployeeForm = ({
    
}) => (
    <div>
        <h3>Add a new employee to your company</h3>
    <Form>
        <label>
            Will this memeber have manager permissions?
            <Field component="checkbox" name="managerPerm"/>
        </label>
        <label>
             Select Department
            <Field component="select" name="addDepartment">
                <option value="dprHr">Human Resources</option>
                <option value="drpAc">Accouting</option>
                <option value="dprEn">Engineering</option>
                <option value="dprRe">Recruitment</option>
                <option value="dprMa">Marketing</option>
            </Field> 
        </label>
        <label>
           Who is thier manager
            <Field type="text" name="name" placeholder="Manager Name"/>

        </label>
        <label>
            Employee Name
            <Field type="text" name="name" placeholder="Juan Wick"/>

        </label>
        <label>
            Job Title
            <Field type="text" name="job" placeholder="Software Engineer"/>

        </label>
        
    </Form>
    </div>
)
const FormikEmployeeForm = withFormik({
    mapPropsToValues({ managerPerm, addDepartment, name, job }) {
        return{
            managerPerm: managerPerm || '',
            addDepartment:  addDepartment || '',
            name: name || '',
            job: job || '',
          }
    }
})(AddEmployeeForm)



render(<FormikEmployeeForm />, document.getElementById('root') )
export default FormikEmployeeForm;