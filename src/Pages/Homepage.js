import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${code}`);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label> Enter Room code</label>
          <input
            type="text"
            required
            placeholder="Enter your room id"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Homepage;
