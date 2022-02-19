package com.seshedu.backend.hobby;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class HobbyController {
    HobbyService service;

    public HobbyController(HobbyService service) {
        this.service = service;
    }

    @PostMapping("/ap1/v1/create/hobby")
    public Hobby addHobby(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/ap1/v1/get/hobby/all")
    public List<Hobby> getHobbies(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/delete/hobby")
    public void deleteHobby(@RequestBody Map<String, String> json) {

    }
}
