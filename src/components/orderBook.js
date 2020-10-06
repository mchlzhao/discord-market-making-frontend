import React from 'react';

const OrderBook = ({ display_order, description, buy_orders, sell_orders }) => {
    sell_orders.reverse()

    let message;
    let buy_message;
    let sell_message;

    if (buy_orders.length === 0 && sell_orders.length === 0) {
        message = "No orders yet";
    } else if (buy_orders.length === 0) {
        buy_message = (
            <li className="list-group-item d-inline-block text-center" style={{borderWidth: "1px"}}>
                <small>No buy orders yet</small>
            </li>
        )
    } else if (sell_orders.length === 0) {
        sell_message = (
            <li className="list-group-item d-inline-block text-center" style={{borderWidth: "1px"}}>
                <small>No sell orders yet</small>
            </li>
        )
    }

    const orderListItem = (order, action_str) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" style={{borderWidth: "1px"}}>
            {order.name}
            <span><small>{action_str} for </small> {order.price}</span>
        </li> 
    )

    const orderList = (buy_orders, sell_orders) => {
        return (
            <div className="card align-items-center" style={{width: "20rem"}}>
                <div className="card-block text-center m-3">
                    <h4 className="card-title">Event {display_order}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush w-100">
                    {sell_orders.map(order => orderListItem(order, "sell"))}
                    {sell_message}
                    <li className="list-group-item d-inline-block text-center" style={{borderWidth: "1px"}}>
                        <small>{message}</small>
                    </li>
                    {buy_message}
                    {buy_orders.map(order => orderListItem(order, "buy"))}
                </ul>
            </div>
        )
    }

    return (
        <div className="col-sm mt-5 mb-5">
            <div className="container">
                {orderList(buy_orders, sell_orders)}
            </div>
        </div>
    )
};

export default OrderBook;
