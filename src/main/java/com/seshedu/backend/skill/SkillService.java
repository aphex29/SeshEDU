package com.seshedu.backend.skill;

import com.seshedu.backend.hobby.Hobby;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class SkillService {
    SkillRepository skillRepo;

    @Autowired
    public SkillService(SkillRepository skillRepo) {
        this.skillRepo = skillRepo;

    }

    public Skill addSkill(Long userId, String skill) {
        Skill newSkill = new Skill(userId, skill);
        return skillRepo.save(newSkill);
    }

    public List<Skill> getSkills(Long userId) {

        List<Skill> skills = skillRepo.findByUserId(userId).orElseThrow(()-> new EntityNotFoundException(""+ userId));
        return skills;

        }

    void deleteSkill(Long skillId) {

        Skill oldSkill = skillRepo.findById(skillId).orElseThrow(()-> new EntityNotFoundException(""+ skillId));
        skillRepo.delete(oldSkill);

    }
}
