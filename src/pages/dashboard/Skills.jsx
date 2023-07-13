
import React, { useState } from "react";

const SkillsForm = () => {
  const [expertness, setExpertness] = useState("");
  const [rateSuccessful, setRateSuccessful] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or data processing here

    // Reset form fields
    setExpertness("");
    setRateSuccessful("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Skills Post</h2>
      <div>
        <label htmlFor="expertness">Expertness:</label>
        <input
          type="text"
          id="expertness"
          value={expertness}
          onChange={(e) => setExpertness(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="rateSuccessful">Rate of Successful:</label>
        <input
          type="text"
          id="rateSuccessful"
          value={rateSuccessful}
          onChange={(e) => setRateSuccessful(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default SkillsForm;

