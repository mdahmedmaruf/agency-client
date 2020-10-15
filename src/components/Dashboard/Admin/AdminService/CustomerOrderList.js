import React from 'react';

const CustomerOrderList = ({orderList}) => {
    return (
        <tr>
            <td> {orderList.name} </td>
            <td> {orderList.email} </td>
            <td> {orderList.orderCategory} </td>
            <td> {orderList.details} </td>
            <td>
                <div className="input-group">
                    <select className="custom-select" role="button">
                        <option defaultValue>Choose</option>
                        <option value="1">Pending</option>
                        <option value="2">On going</option>
                        <option value="3">Done</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default CustomerOrderList;