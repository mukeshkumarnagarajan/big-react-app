/*
  Styling in css
  ----------
    0. Global styles in index.css
    1. External style fro components[Not Recommended]
    2. Internal style
    3. Inline style
    4. Css Modules
    5. Styled-components or @emotion
*/

import "./Subscription.css";
import { MouseEventHandler, memo } from "react";

const subscriptionStyles = {
  renewStyles: {
    backgroundColor: "Orange",
    color: "White",
    padding: "20px",
    border: "solid 2px darkred",
    borderRadius: "50px",
  },
  renewButtonStyles: {
    backgroundColor: "Orange",
    color: "White",
    padding: "10px 25px",
    borderRadius: "5px",
  },
};



const Subcsription: React.FC<{fun: MouseEventHandler<HTMLButtonElement>}>= memo(({fun}) => {
  console.log("sub");
  return (
    <div className="text-center">
      <h3 className="subscription-info">
        You are an active subscriber of Netflix!
      </h3>

      <h4
        style={{
          backgroundColor: "Orange",
          color: "White",
          padding: "20px",
          border: "solid 2px darkred",
          borderRadius: "50px",
        }}
      >
        Your subscription end in 2 weeks
      </h4>

      <h4 style={subscriptionStyles.renewStyles}>
        Renew Now to get 50% discount. Use Coupon Code: OFFER50 during checkout
      </h4>

      <button style={subscriptionStyles.renewButtonStyles} onClick={fun}>RENEW</button>
    </div>
  );
});

export default Subcsription;
