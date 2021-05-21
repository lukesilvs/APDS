const express= require('express');

const app=express();

app.use('/api/orders',(req,res,next)=>
{
  const orders=[
    {
      id: "2jofunisr3od",
      username: "molly_001",
      Email: "molly@sales.com",
      PlaceOrder: "Cheese cake"
    },

    {
      id: "2jofunisr3od",
      username: "molly_002",
      Email: "molly@sales.com",
      PlaceOrder: "Lemon Pie"
    }

  ];
  res.json(
    {
      message: 'orders retrieved',
      orders:orders
    }
  );
});

module.exports = app;


