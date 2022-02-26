package com.seshedu.backend.education;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EducationController {
    EducationService service;

    @Autowired
    public EducationController(EducationService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/education")
    public Education createEducation(@RequestBody Map<String, String> json) {
        Long userId = Long.parseLong(json.get("userId"));
        String school = json.get("school");
        String degreeType = json.get("degreeType");
        String major = json.get("major");
        Integer startYear = Integer.parseInt(json.get("startYear"));
        Integer endYear = Integer.parseInt(json.get("endYear"));
        return service.createEducation(userId,school,degreeType,major,startYear,endYear);
    }

    @PostMapping("/api/v1/get/education")
    public List<Education> getAllEducation(@RequestBody Map<String, String> json) {
        Long userId = Long.parseLong(json.get("userId"));
        return service.getAllEducation(userId);
    }

    @PostMapping("/api/v1/update/education")
    public Education updateEducation(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("id"));
        String school = json.get("school");
        String degreeType = json.get("degreeType");
        String major = json.get("major");
        Integer startYear = Integer.parseInt(json.get("startYear"));
        Integer endYear = Integer.parseInt(json.get("endYear"));
        return service.updateEducation(educationId, school,degreeType,major,startYear,endYear);
    }

    @PostMapping("/api/v1/update/education/school")
    public Education updateSchool(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("educationId"));
        String newSchool = json.get("newSchool");
        return service.updateSchool(educationId,newSchool);
    }

    @PostMapping("/api/v1/update/education/degree-type")
    public Education updateDegreeType(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("educationId"));
        String newDegree = json.get("newDegree");
        return service.updateDegreeType(educationId,newDegree);
    }

    @PostMapping("/api/v1/update/education/major")
    public Education updateMajor(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("educationId"));
        String newMajor = json.get("newMajor");
        return service.updateMajor(educationId,newMajor);
    }

    @PostMapping("/api/v1/update/education/start-year")
    public Education updateStartYear(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("educationId"));
        String newStartYear = json.get("newStartYear");
        return service.updateStartYear(educationId,newStartYear);
    }

    @PostMapping("/api/v1/update/education/end-year")
    public Education updateEndYear(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("educationId"));
        String newEndYear = json.get("newEndYear");
        return service.updateEndYear(educationId,newEndYear);
    }

    @PostMapping("/api/v1/delete/education")
    public void deleteEducation(@RequestBody Map<String, String> json) {
        Long educationId = Long.parseLong(json.get("id"));
        service.deleteEducation(educationId);
    }
}
