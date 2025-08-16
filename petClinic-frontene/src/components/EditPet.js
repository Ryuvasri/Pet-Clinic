import React, { useState, useEffect } from "react";

function EditPet({ pet, onUpdate, onCancel }) {
  const [name, setName] = useState(pet.name);
  const [type, setType] = useState(pet.type);
  const [ownerName, setOwnerName] = useState(pet.ownerName);
  const [ownerPhone, setOwnerPhone] = useState(pet.ownerPhone);

  useEffect(() => {
    setName(pet.name);
    setType(pet.type);
    setOwnerName(pet.ownerName);
    setOwnerPhone(pet.ownerPhone);
  }, [pet]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...pet, name, type, ownerName, ownerPhone });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Edit Pet</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <input value={type} onChange={(e) => setType(e.target.value)} required />
      <input
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        required
      />
      <input
        value={ownerPhone}
        onChange={(e) => setOwnerPhone(e.target.value)}
        required
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditPet;
