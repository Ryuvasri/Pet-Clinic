import React from "react";
import EditPet from "./EditPet";

function PetList({ pets, onDelete, onEdit, onUpdate, editingPet }) {
  return (
    <div>
      <h3>Pet List</h3>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Pet Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Type</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Owner Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Owner Phone</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{pet.id}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{pet.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{pet.type}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{pet.ownerName}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{pet.ownerPhone}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => onEdit(pet)} style={{ marginRight: "5px" }}>
                  Edit
                </button>
                <button onClick={() => onDelete(pet.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingPet && (
        <EditPet
          pet={editingPet}
          onUpdate={onUpdate}
          onCancel={() => onEdit(null)}
        />
      )}
    </div>
  );
}

export default PetList;
