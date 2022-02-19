package com.seshedu.backend.education;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class EducationController {
    EducationService service;

    @Autowired
    public EducationController(EducationService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/education")
    public Education createEducation(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/education")
    public List<Education> getAllEducation(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/education/school")
    public Education updateSchool(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/education/degree-type")
    public Education updateDegreeType(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/education/major")
    public Education updateMajor(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/education/start-year")
    public Education updateStartYear(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/education/end-year")
    public Education updateEndYear(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/delete/education")
    public void deleteEducation(@RequestBody Map<String, String> json) {

    }
}
