package com.pet.petclinic.repository;
import com.pet.petclinic.model.Pet;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Long> 
{
    
}
