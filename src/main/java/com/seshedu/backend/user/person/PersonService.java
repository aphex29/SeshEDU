package com.seshedu.backend.user.person;

import com.seshedu.backend.account.UserAccount;
import com.seshedu.backend.hobby.Hobby;
import com.seshedu.backend.hobby.HobbyRepository;
import com.seshedu.backend.skill.Skill;
import com.seshedu.backend.skill.SkillRepository;
import com.seshedu.backend.user.User;
import java.util.function.Predicate;
import javax.persistence.EntityNotFoundException;
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

    public Person createPerson(String username, String name, String email, String password, String city, String state) {
        Person person = new Person(username, name, email, password, city, state);
        return personRepo.save(person);
    }

    public Person getPerson(String username) {
        return personRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException("" + username));
    }

    public List<Person> getNearbyPeople(String username, String city) {
        return personRepo.findByCityAndUsernameNot(city, username).orElseThrow(() -> new EntityNotFoundException("" + username));
    }

    public Person updateName(String username, String newName) {
        Person userUpdateName = personRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException("" + username));
        userUpdateName.setName(newName);
        return personRepo.save(userUpdateName);
    }

    public Person updateUsername(String username, String newUserName) {
        Person userUpdateUsername = personRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException("" + username));
        userUpdateUsername.setUsername(newUserName);
        return personRepo.save(userUpdateUsername);
    }

    public Person updateEmail(String username, String newEmail) {

        Person userUpdateEmail = personRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException("" + username));
        userUpdateEmail.setEmail(newEmail);
        return personRepo.save(userUpdateEmail);
    }

    public Person updateCity(String username, String newCity) {
        Person userUpdateCity = personRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException("" + username));
        userUpdateCity.setCity(newCity);
        return personRepo.save(userUpdateCity);
    }

    public Person updateState(String username, String newState) {
        Person userUpdateState = personRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException("" + username));
        userUpdateState.setState(newState);
        return personRepo.save(userUpdateState);
    }

    public void deletePerson(Long id) {
        Person delUserAccount = personRepo.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("" + id));
        personRepo.delete(delUserAccount);
    }
}
