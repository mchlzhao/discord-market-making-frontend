import React from 'react';
import OrderBook from './orderBook';

const Markets = ({ instruments }) => {
    return (
        <div className="container">
            <div className="row">
                {instruments.map((instrument) => (
                    <OrderBook key={instrument.id} display_order={instrument.display_order} description={instrument.desc}
                        buy_orders={instrument.buy_orders} sell_orders={instrument.sell_orders} />
                ))}
            </div>
        </div>
    )
}

export default Markets;