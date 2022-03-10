package com.seshedu.backend.education;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class EducationService {
    EducationRepository educationRepo;

    @Autowired
    public EducationService(EducationRepository educationRepo){
        this.educationRepo = educationRepo;
    }

    public Education createEducation(Long userId, String school, String degreeType,
                                    String major, Integer startYear, Integer endYear) {

        Education newEducation = new Education(userId, school, degreeType, major, startYear, endYear );
        return educationRepo.save(newEducation);
    }

    public Education updateEducation(Long educationId, String school, String degreeType,
                                     String major, Integer startYear, Integer endYear) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        newEducation.setSchool(school);
        newEducation.setDegreeType(degreeType);
        newEducation.setMajor(major);
        newEducation.setStartYear(startYear);
        newEducation.setEndYear(endYear);
        return educationRepo.save(newEducation);
    }

    public List<Education> getAllEducation(Long userId) {
        List<Education> allEducation = educationRepo.findByUserId(userId).orElseThrow(()-> new EntityNotFoundException(""+ userId));
        return allEducation;
    }

    public Education updateSchool(Long educationId, String newSchool) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        newEducation.setSchool(newSchool);
        return educationRepo.save(newEducation);
    }

    public Education updateDegreeType(Long educationId, String newDegree) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        newEducation.setDegreeType(newDegree);
        return educationRepo.save(newEducation);
    }

    public Education updateMajor(Long educationId, String newMajor) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        newEducation.setMajor(newMajor);
        return educationRepo.save(newEducation);
    }

    public Education updateStartYear(Long educationId, Integer newStartYear) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        newEducation.setStartYear(newStartYear);
        return educationRepo.save(newEducation);
    }

    public Education updateEndYear(Long educationId, Integer newEndYear) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        newEducation.setEndYear(newEndYear);
        return educationRepo.save(newEducation);
    }

    public void deleteEducation(Long educationId) {
        Education oldEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId))   ;
        educationRepo.delete(oldEducation);
    }
}
