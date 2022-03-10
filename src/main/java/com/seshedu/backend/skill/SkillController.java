package com.seshedu.backend.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SkillController {
    SkillService service;

    @Autowired
    public SkillController(SkillService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/skill")
    public Skill addSkill(@RequestBody Map<String, String> json) {
        Long userId = Long.parseLong(json.get("userId"));
        String skill = json.get("skill");
        return service.addSkill(userId, skill);
    }

    @PostMapping("/api/v1/get/skill/all")
    public List<Skill> getSkill(@RequestBody Map<String, String> json) {
        Long userId = Long.parseLong(json.get("userId"));
        return service.getSkills(userId);
    }

    @PostMapping("/api/v1/delete/skill")
    public void deleteSkill(@RequestBody Map<String, String> json) {
        Long skillId = Long.parseLong(json.get("id"));
        service.deleteSkill(skillId);
    }
}
