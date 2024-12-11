import { useState } from "react";

const StepOne = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Step 1: Choose an Option</h2>
      <select onChange={handleSelect} value={selectedOption}>
        <option value="">-- Select an Option --</option>
        <option value="Accountant">Accountant</option>
        <option value="Company">Company</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default StepOne;
