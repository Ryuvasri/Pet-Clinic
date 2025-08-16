package com.pet.petclinic.controller;

import com.pet.petclinic.model.Pet;
import com.pet.petclinic.service.PetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000") 
@RestController
@RequestMapping("/api/pets")
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @PostMapping
    public Pet addPet(@RequestBody Pet pet) {
        return petService.addPet(pet);
    }


    @DeleteMapping("/{id}")
    public void deletePet(@PathVariable Long id) {
        petService.deletePet(id);
    }

    @PutMapping("/{id}")
    public Pet updatePet(@PathVariable Long id, @RequestBody Pet pet) {
        Pet existing = petService.getPetById(id);
        existing.setName(pet.getName());
        existing.setType(pet.getType());
        existing.setOwnerName(pet.getOwnerName());
        existing.setOwnerPhone(pet.getOwnerPhone());
        return petService.addPet(existing);
    }


}
