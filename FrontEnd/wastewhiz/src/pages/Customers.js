import React from "react";
import Form from "../components/Form";

import "./Customers.css";

const Customers = () => {
    return (
        <React.Fragment>

            <div className="customer-container">
                <h1 className="customers-title">Un-Turned Customers</h1>
                {/* <div className="form-container"> */}
                    <Form />
                {/* </div> */}
            </div>
        </React.Fragment>
    );
}

export default Customers;