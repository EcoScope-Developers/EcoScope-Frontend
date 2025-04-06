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
      const accessToken = localStorage.getItem('accessToken');
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('You need to be logged in to purchase a plan.');
        return;
      }

      // Fetch user details to check the current plan
      const userDetailsResponse = await fetch(`https://ecoscope-backend.onrender.com/api/fetch/fetch-user-by-userid?userId=${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        credentials: 'include',
      });

      const userDetails = await userDetailsResponse.json();

      console.log("userDetails.plan", userDetails, "---", "plan.name", plan.name)

      // Check if the user already has the "Smart" plan and is trying to upgrade to it
      if (userDetails.user.plan === "Smart" && plan.name === "Smart") {
        alert("You already have the Smart Plan.");
        return;
      }
      else {
        // Check if the user has any active plan
        const activePlanResponse = await fetch(`https://ecoscope-backend.onrender.com/api/plan/check-user-have-active-plan?userId=${userId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          credentials: 'include',
        });

        const activePlanResult = await activePlanResponse.json();

        if (activePlanResult.isActivePlan) {
          const userConfirmed = window.confirm(
            'You already have an active plan. Do you really want to update the plan?'
          );
          if (!userConfirmed) {
            return; // Exit if the user cancels
          }

          // Downgrade to "Smart" if confirmed and selected
          if (plan.name === "Smart") {
            const downgradeResponse = await fetch(`https://ecoscope-backend.onrender.com/api/plan/assign-plan?userId=${userId}&planName=Smart`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
              credentials: 'include',
            });

            if (downgradeResponse.ok) {
              localStorage.setItem("userPlan", plan.name); // ⬅️ update localStorage
              alert('Your plan has been downgraded to the Smart Plan.');
              window.location.reload();
            } else {
              const errorData = await downgradeResponse.json();
              alert(`Failed to downgrade plan: ${errorData.error || 'Unknown error'}`);
            }

            return; // Exit after downgrading
          }
        }

        // Proceed to payment for other plans
        const paymentResponse = await fetch('https://ecoscope-backend.onrender.com/api/payment/create-order', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: plan.priceInPaise, currency: 'INR' }),
          credentials: 'include',
        });

        const order = await paymentResponse.json();

        if (!order.id) {
          alert('Failed to create order. Please try again.');
          return;
        }

        const options = {
          key: 'rzp_test_RLZPg3Wne8JW3B', // Replace with your Razorpay key_id
          amount: plan.priceInPaise,
          currency: 'INR',
          name: 'EcoScope',
          description: `${plan.name} Plan`,
          order_id: order.id,
          handler: async (response) => {
            await fetch(`https://ecoscope-backend.onrender.com/api/payment/update-user-plan?userId=${userId}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payment_id: response.razorpay_payment_id,
                plan: plan.name,
              }),
              credentials: 'include',
            });
            localStorage.setItem("userPlan", plan.name); // ⬅️ update localStorage
            alert(`Payment successful! Your plan has been updated to ${plan.name} plan.`);
            window.location.reload();
          },
          prefill: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#3399cc',
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
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
            // disabled={plan.name === 'Smart'} // Disable the button for the 'Smart' plan
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
