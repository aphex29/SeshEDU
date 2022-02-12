package com.seshedu.backend.education;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return null;
    }

    public List<Education> getAllEducation(Long userId) {
        return null;
    }

    public Education updateSchool(Long educationId, String newSchool) {
        return null;
    }

    public Education updateDegreeType(Long educationId, String newDegree) {
        return null;
    }

    public Education updateMajor(Long educationId, String newMajor) {
        return null;
    }

    public Education updateStartYear(Long educationId, String newStartYear) {
        return null;
    }

    public Education updateEndYear(Long educationId, String newEndYear) {
        return null;
    }

    public void deleteEducation(Long educationId) {

    }
}
