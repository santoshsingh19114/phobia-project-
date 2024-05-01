import React from "react";
import "./Pricing.css"

const Pricing = () => {
  return (
    <div>
      <section className="pricing">
        <h2>pricing</h2>

        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <container className="threapy-plan">
            <plan>
                <header>basic plan</header>
                <price>free Access</price>
                <ul>
                    <li>free Access</li>
                    <li>1 session</li>
                    <li>Social Media Integration</li>
                </ul>
                <button>Get Started</button>
            </plan>
            <plan featured>
                <header>premium plan</header>
                <price>$30/month</price>
                <special>Featured</special>
                <ul>
                    <li>Unlimited session </li>
                    <li>Doctor Consultance</li>
                    <li>Advanced Social Media Integration</li>
                </ul>
                <button>Upgrade now</button>
            </plan>
        </container>
      </section>
            
      
    </div>
  );
};

export default Pricing;
