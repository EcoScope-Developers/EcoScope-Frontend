import React from 'react';
import "../../assets/styles/pricingPlansStyles/PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      name: 'Smart',
      price: 'Free',
      priceInPaise: 0, // Amount in paise for Razorpay
      imageLimit: 5,
      features: [
        'Tree Count',
        'Green Cover Estimator',
        'Current Weather Information'
      ],
      icon: 'fa-solid fa-gift',
    },
    {
      name: 'Pro',
      price: '₹999/year',
      priceInPaise: 99900, // Razorpay expects the amount in paise
      imageLimit: 7,
      features: [
        'Tree Count',
        'Green Cover Estimator',
        'Current Weather Information',
        'Tree Species Identifier',
        'Optimal Pathing',
      ],
      icon: 'fa-solid fa-star',
    },
    {
      name: 'Premium',
      price: '₹1999/year',
      priceInPaise: 199900, // Razorpay expects the amount in paise
      imageLimit: 10,
      features: [
        'Tree Count',
        'Green Cover Estimator',
        'Current Weather Information',
        'Tree Species Identifier',
        'Optimal Pathing',
        'Historical Data',
        'Visualization',
      ],
      icon: 'fa-solid fa-crown',
    },
  ];

  const handlePurchase = async (plan) => {
    try {
      // Create Razorpay order via backend
      const accessToken = localStorage.getItem('accessToken');
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You need to be logged in to purchase a plan.');
        return;
      }

      const response = await fetch('https://ecoscope-backend.onrender.com/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: plan.priceInPaise, currency: 'INR' }),
        credentials: 'include', // Ensure cookies are sent with the request
      });
      const order = await response.json();
      console.log(order);

      if (!order.id) {
        alert('Failed to create order. Please try again.');
        return;
      }

      // Initialize Razorpay payment
      const options = {
        key: 'rzp_test_RLZPg3Wne8JW3B', // Replace with your Razorpay key_id
        amount: plan.priceInPaise,
        currency: 'INR',
        name: 'EcoScope',
        description: `${plan.name} Plan`,
        order_id: order.id,
        handler: async (response) => {
          console.log(response);
          // Update user's plan information in the database
          await fetch(`http://localhost:8000/api/payment/update-user-plan?userId=${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              plan: plan.name,
            }),
            credentials: 'include', // Send cookies with the request
          });
          alert(`Payment successful! Your plan has been updated to ${plan.name} plan.`);
        },
        prefill: {
          name: 'John Doe', // Prefill user's details
          email: 'johndoe@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="plans-container">
      <h1>EcoScope Plans</h1>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h2>
              <i className={plan.icon}></i> {plan.name}
            </h2>
            <p className="price">{plan.price}</p>
            <p>Upload Limit: {plan.imageLimit} images</p>
            <h3>Features:</h3>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className="purchase-button"
              onClick={() => handlePurchase(plan)}
              disabled={plan.name === 'Smart'} // Disable the button for the 'Smart' plan
            >
              {plan.name === 'Smart' ? 'Free Plan' : 'Purchase'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
