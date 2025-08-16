package com.pet.petclinic.model;

import jakarta.persistence.*;

@Entity
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String type;
    private String ownerName;
    private String ownerPhone;

    public Pet() {}

    public Pet(String name, String type, String ownerName, String ownerPhone) {
        this.name = name;
        this.type = type;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getType() { return type; }
    public String getOwnerName() { return ownerName; }
    public String getOwnerPhone() { return ownerPhone; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setType(String type) { this.type = type; }
    public void setOwnerName(String ownerName) { this.ownerName = ownerName; }
    public void setOwnerPhone(String ownerPhone) { this.ownerPhone = ownerPhone; }
}
