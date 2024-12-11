import { useState } from "react";

const StepTwo = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h2>Step 2: Enter Your Email</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
      />
      {email && <p>Your email: {email}</p>}
    </div>
  );
};

export default StepTwo;
