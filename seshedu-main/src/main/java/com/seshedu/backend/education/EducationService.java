package com.seshedu.backend.education;

import com.seshedu.backend.hobby.Hobby;
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

    public List<Education> getAllEducation(Long userId) {

        List<Education> educations = educationRepo.findByUserId(userId).orElseThrow(()-> new EntityNotFoundException(""+ userId));
        return educations;
    }

    public Education updateSchool(Long educationId, String newSchool) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        return educationRepo.save(newEducation);//---use this for updating
    }

    public Education updateDegreeType(Long educationId, String newDegree) {

        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        return educationRepo.save(newEducation);//---use this for updating
    }

    public Education updateMajor(Long educationId, String newMajor) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        return educationRepo.save(newEducation);//---use this for updating
    }

    public Education updateStartYear(Long educationId, String newStartYear) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        return educationRepo.save(newEducation);//---use this for updating
    }

    public Education updateEndYear(Long educationId, String newEndYear) {
        Education newEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId));
        return educationRepo.save(newEducation);//---use this for updating
    }

    public void deleteEducation(Long educationId) {

        Hobby oldEducation = educationRepo.findById(educationId).orElseThrow(()-> new EntityNotFoundException(""+ educationId))   ;
        educationRepo.delete(oldEducation);
    }
}
