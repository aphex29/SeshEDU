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
    public User createPerson(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/person")
    public User getPerson(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/nearby-people")
    public List<User> getNearbyPeople(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/person/name")
    public User updateName(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/person/username")
    public User updateUsername(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/person/email")
    public User updateEmail(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/person/city")
    public User updateCity(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/person/state")
    public User updateState(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/delete/person")
    public void deletePerson(@RequestBody Map<String, String> json) {

    }
}
