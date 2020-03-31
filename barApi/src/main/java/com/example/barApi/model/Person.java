package com.example.barApi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Person {

    @Id
    String id;

    String firstName;
    String lastName;
    String email;


    String password;
    int mob,rooms;

    public Person(String firstName, String lastName, int mob, String email, int rooms,String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mob = mob;
        this.email = email;
        this.rooms = rooms;
        this.password=password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return mob;
    }

    public void setMob(int mob) {
        this.mob = mob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms= rooms;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
