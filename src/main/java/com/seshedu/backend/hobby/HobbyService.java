package com.seshedu.backend.hobby;

import com.seshedu.backend.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class HobbyService {
    HobbyRepository hobbyRepo;

    @Autowired
    public HobbyService(HobbyRepository hobbyRepo) {
        this.hobbyRepo = hobbyRepo;
    }

    public Hobby addHobby(Long userId, String hobby) {
        Hobby newHobby = new Hobby(userId, hobby);
        return hobbyRepo.save(newHobby);
    }

    public List<Hobby> getHobbies(Long userId) {

        List<Hobby> hobbies = hobbyRepo.findByUserId(userId).orElseThrow(()-> new EntityNotFoundException(""+ userId));
        return hobbies;


    }

    public void deleteHobby(Long hobbyId) {

       Hobby oldHobby = hobbyRepo.findById(hobbyId).orElseThrow(()-> new EntityNotFoundException(""+ hobbyId))   ;
       hobbyRepo.delete(oldHobby);

    }


}
