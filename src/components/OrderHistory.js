import React from 'react';

const OrderHistory = () => {
  const orders = [
    { id: 1, item: 'Товар 1', date: '2023-01-01', status: 'Доставлен' },
    { id: 2, item: 'Товар 2', date: '2023-02-01', status: 'В пути' },
  ];

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>История заказов</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.item} - {order.date} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
