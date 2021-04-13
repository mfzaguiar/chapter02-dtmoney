import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          cetegory: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-03-15 09:00:00')
        },
        {
          id: 2,
          title: 'Pagamento aluguel',
          type: 'withdraw',
          cetegory: 'Casa',
          amount: 800,
          createdAt: new Date('2021-03-14 09:00:00')
        },
        {
          id: 3,
          title: 'Freelance de landing page',
          type: 'deposit',
          cetegory: 'Dev',
          amount: 1500,
          createdAt: new Date('2021-03-22 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

