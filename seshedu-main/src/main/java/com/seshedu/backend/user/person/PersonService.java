package com.seshedu.backend.user.person;

import com.seshedu.backend.hobby.Hobby;
import com.seshedu.backend.hobby.HobbyRepository;
import com.seshedu.backend.skill.Skill;
import com.seshedu.backend.skill.SkillRepository;
import com.seshedu.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    PersonRepository personRepo;

    @Autowired
    public PersonService(PersonRepository personRepo) {
        this.personRepo = personRepo;
    }

    public User createPerson(String username, String name, String email, String password) {
        return null;
    }

    public User getPerson(Long userId) {
        return null;
    }

    public List<User> getNearbyPeople(Long userId, String city) {
        return null;
    }

    public User updateName(String userId, String newName) {
        return null;
    }

    public User updateUsername(String userId, String newUserName) {
        return null;
    }

    public User updateEmail(String userId, String newEmail) {
        return null;
    }

    public User updateCity(String userId, String newCity) {
        return null;
    }

    public User updateState(String userId, String newState) {
        return null;
    }

    public void deletePerson(Long userId) {

    }
}
