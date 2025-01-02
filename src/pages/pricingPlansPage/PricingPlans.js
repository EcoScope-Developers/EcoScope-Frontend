import React from 'react';
import "../../assets/styles/pricingPlansStyles/PricingPlans.css";

const PricingPlans = () => {
  const plans = [
    {
      name: 'Smart',
      price: 'Free',
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
      price: '$9.99/month',
      imageLimit: 7,
      features: [
        'Tree Count',
        'Green Cover Estimator',
        'Current Weather Information',
        'Tree Species Identifier',
        'Optimal Pathing',
        'Current Weather Information'
      ],
      icon: 'fa-solid fa-star', 
    },
    {
      name: 'Premium',
      price: '$19.99/month',
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
            <button className="purchase-button">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
