package com.seshedu.backend.hobby;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HobbyService {
    HobbyRepository hobbyRepo;

    @Autowired
    public HobbyService(HobbyRepository hobbyRepo) {
        this.hobbyRepo = hobbyRepo;
    }

    public Hobby addHobby(String userId, String hobby) {
        return null;
    }

    public List<Hobby> getHobbies(String userId) {
        return null;
    }

    void deleteHobby(String hobbyId) {

    }
}
