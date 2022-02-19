package com.seshedu.backend.availability;

import com.seshedu.backend.session.Session;
import com.seshedu.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class AvailabilityController {
    AvailabilityService service;

    @Autowired
    public AvailabilityController(AvailabilityService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/availability")
    public Availability createAvailability(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/availability")
    public List<Availability> getAvailability(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/available-matches")
    public Map<User, List<Availability>> getAvailableMatches(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/availability/start-time")
    public Availability updateStartTime(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/availability/end-time")
    public Availability updateEndTime(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/delete/availability")
    public void deleteAvailability(@RequestBody Map<String, String> json) {
    }
}
