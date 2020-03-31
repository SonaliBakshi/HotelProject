package com.example.barApi.service;

import com.example.barApi.model.Person;
import com.example.barApi.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    //CreateOperation
    public Person create(String firstName, String lastName, int mob,String email,int rooms,String password) {
        return personRepository.save(new Person(firstName,lastName,mob,email,rooms,password));
    }


    //RetrieveOperation
    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Person findByFirstName(String firstName) {
        return personRepository.findByFirstName(firstName);
    }

    //UpdateOperation
    public Person update(String firstName, String lastName, int mob) {
        Person p = personRepository.findByFirstName(firstName);
        p.setLastName(lastName);
        p.setMob(mob);
        return personRepository.save(p);
    }

    //DeleteOperation
    public void deleteAll() {
        personRepository.deleteAll();
    }

    public void delete(String firstName) {
        Person p = personRepository.findByFirstName(firstName);
        personRepository.delete(p);
    }
}
