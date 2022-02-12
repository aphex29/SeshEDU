package com.seshedu.backend.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {
    SkillRepository skillRepo;

    @Autowired
    public SkillService(SkillRepository skillRepo) {
        this.skillRepo = skillRepo;

    }

    public Skill addSkill(String userId, String skill) {
        return null;
    }

    public List<Skill> getSkills(String userId) {return null;}

    void deleteSkill(String skillId) {

    }
}
