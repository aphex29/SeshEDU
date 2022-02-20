package com.seshedu.backend.hobby;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HobbyController {
    HobbyService service;

    public HobbyController(HobbyService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/hobby")
    public Hobby addHobby(@RequestBody Map<String, String> json) {
        Long userId = Long.parseLong(json.get("userId"));
        String hobby = json.get("hobby");
        return service.addHobby(userId,hobby);
    }

    @PostMapping("/api/v1/get/hobby/all")
    public List<Hobby> getHobbies(@RequestBody Map<String, String> json) {
        Long userId = Long.parseLong(json.get("userId"));
        return service.getHobbies(userId);
    }

    @PostMapping("/api/v1/delete/hobby")
    public void deleteHobby(@RequestBody Map<String, String> json) {
        Long hobbyId = Long.parseLong(json.get("id"));
        service.deleteHobby(hobbyId);
    }
}
