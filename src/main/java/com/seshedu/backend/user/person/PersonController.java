package com.seshedu.backend.user.person;

import com.seshedu.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PersonController {
    private PersonService service;

    @Autowired
    public PersonController(PersonService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/person")
    public Person createPerson(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String name = json.get("name");
        String email = json.get("email");
        String password = json.get("password");
        String city = json.get("city");
        String state = json.get("state");
        return service.createPerson(username,name,email,password,city,state);
    }

    @PostMapping("/api/v1/get/person")
    public Person getPerson(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        return service.getPerson(username);
    }

    @PostMapping("/api/v1/get/nearby-people")
    public List<Person> getNearbyPeople(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String city = json.get("city");
        return service.getNearbyPeople(username,city);
    }

    @PostMapping("/api/v1/update/person/name")
    public Person updateName(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String newName = json.get("newName");
        return service.updateName(username,newName);
    }

    @PostMapping("/api/v1/update/person/username")
    public Person updateUsername(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String newUserName = json.get("newUserName");
        return service.updateUsername(username,newUserName);
    }

    @PostMapping("/api/v1/update/person/email")
    public Person updateEmail(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String newEmail = json.get("newEmail");
        return service.updateEmail(username,newEmail);
    }

    @PostMapping("/api/v1/update/person/city")
    public Person updateCity(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String newCity = json.get("newCity");
        return service.updateCity(username,newCity);
    }

    @PostMapping("/api/v1/update/person/state")
    public Person updateState(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String newState = json.get("newState");
        return service.updateState(username,newState);
    }

    @PostMapping("/api/v1/delete/person")
    public void deletePerson(@RequestBody Map<String, String> json) {
        Long id = Long.parseLong(json.get("id"));
        service.deletePerson(id);
    }
}
