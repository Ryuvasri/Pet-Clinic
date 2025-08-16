import React, { useState } from "react";

function AddPet({ onAdd }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, type, ownerName, ownerPhone });
    setName("");
    setType("");
    setOwnerName("");
    setOwnerPhone("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "350px",
      }}
    >
      <h3>Add New Pet</h3>
      <input
        type="text"
        placeholder="Pet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ margin: "5px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Pet Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
        style={{ margin: "5px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Owner Name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        required
        style={{ margin: "5px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Owner Phone"
        value={ownerPhone}
        onChange={(e) => setOwnerPhone(e.target.value)}
        required
        style={{ margin: "5px", padding: "5px" }}
      />
      <button
        type="submit"
        style={{
          padding: "5px 10px",
          margin: "5px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddPet;
