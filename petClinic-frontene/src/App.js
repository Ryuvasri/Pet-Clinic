import React, { useState, useEffect } from "react";
import AddPet from "./components/AddPet";
import PetList from "./components/PetList";

function App() {
  const [pets, setPets] = useState([]);
  const [editingPet, setEditingPet] = useState(null);

  // fetch pets
  useEffect(() => {
    fetch("http://localhost:8080/api/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  // add new pet
  const addPet = (pet) => {
    fetch("http://localhost:8080/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pet),
    })
      .then((res) => res.json())
      .then((newPet) => setPets([...pets, newPet]));
  };

  // delete pet
  const deletePet = (id) => {
    fetch(`http://localhost:8080/api/pets/${id}`, { method: "DELETE" }).then(() =>
      setPets(pets.filter((p) => p.id !== id))
    );
  };

  // update pet
  const updatePet = (updatedPet) => {
    fetch(`http://localhost:8080/api/pets/${updatedPet.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPet),
    })
      .then((res) => res.json())
      .then((data) => {
        setPets(pets.map((p) => (p.id === data.id ? data : p)));
        setEditingPet(null); // close editing form
      });
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>🐾 Pet Clinic</h1>
      <AddPet onAdd={addPet} />
      <PetList
        pets={pets}
        onDelete={deletePet}
        onEdit={setEditingPet}
        onUpdate={updatePet}
        editingPet={editingPet}
      />
    </div>
  );
}

export default App;
