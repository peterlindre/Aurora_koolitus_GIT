import React from 'react'

function payments() {

const pay = () => {
  const paymentURL = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
  const paymentBody = {
  "account_name": "EUR3D1",
  "nonce": "16573d2" + new Date() + Math.random() * 99999,
  "timestamp": new Date(),
  "amount": Math.random() * 99 ,
  "order_reference": Math.random() * 99999,
  "customer_url": "https://veebipood-inglise-keelne.web.app",
  "api_username": "92ddcfab96e34a5f"
};
  const paymentHeaders = {
    "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
    "Content-Type": "application/json" 
  };

  fetch(paymentURL, {method: "POST", body: JSON.stringify(paymentBody), headers: paymentHeaders})
  .then(res => res.json())
  .then(json => window.location.href = json.payment_link)
}

// window.location.href ---> v66rale URL-le minek (mitte localhost:3000), l2bi javascripti

  return (
    <div>
      
      <button onClick={pay}>Pay</button>
    </div>
  )
}

export default payments