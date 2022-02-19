package com.seshedu.backend.availability;

import com.seshedu.backend.session.Session;
import com.seshedu.backend.user.User;
import com.seshedu.backend.user.person.Person;
import com.seshedu.backend.user.person.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.*;

@Service
public class AvailabilityService {
    AvailabilityRepository availRepo;
    PersonRepository userRepo;


    @Autowired
    public AvailabilityService(AvailabilityRepository availRepo, PersonRepository userRepo) {
        this.availRepo = availRepo;
        this.userRepo = userRepo;
    }

    public Availability createAvailability(Long userId, Date date, Float startTime, Float endTime) {
        Availability avail = new Availability(userId, date, startTime, endTime);
        return availRepo.save(avail);
    }

    public List<Availability> getAvailability(Long userId) {
        return availRepo.findByUserId(userId)
                .orElseThrow(() -> new EntityNotFoundException("" + userId));
    }

    public Map<User, List<Availability>> getAvailableMatches(Long userId) {
        User currUser = userRepo.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("" + userId));

        // find other users who live in same city as current user
        List<Person> othersUsers = userRepo.findByCityAndIdNot(currUser.getCity(), userId)
                .orElseThrow(() -> new EntityNotFoundException("(" + currUser.getCity() + "," + userId + ")"));

        List<User> matchingCityAndDateOthers = new ArrayList<>();
        List<Availability> matchingCityAndDateAvail = new ArrayList<>();
        for (User otherUser : othersUsers) {
            List<Availability> otherUserAvail = availRepo.findByUserId(otherUser.getId())
                    .orElseThrow(() -> new EntityNotFoundException("" + userId));

            for (Availability a : otherUserAvail) {
                matchingCityAndDateOthers.add(otherUser);
                matchingCityAndDateAvail.add(a);
            }
        }
        List<Availability> currUserAvail = availRepo.findByUserId(userId)
                .orElseThrow(() -> new EntityNotFoundException("" + userId));

        return getAvailableMatchesH(currUserAvail, matchingCityAndDateOthers, matchingCityAndDateAvail);
    }

    private Map<User, List<Availability>> getAvailableMatchesH(List<Availability> currUserAvail, List<User> otherUsers,
                                                               List<Availability> otherUsersAvail) {
        Map<User, List<Availability>> matches = new HashMap<>();

        // find matches based on shared date amd time
        for (Availability avail : currUserAvail) {
            for (int i = 0; i < otherUsersAvail.toArray().length; i++) {
                Availability oUserAvail = otherUsersAvail.get(i);
                if (avail.getStartTime() >= oUserAvail.getStartTime()
                        && avail.getEndTime() <= oUserAvail.getEndTime()
                        && avail.getDate() == oUserAvail.getDate()) {

                    User oUser = otherUsers.get(i);
                    if (matches.containsKey(oUser)) {
                        matches.get(oUser).add(oUserAvail);
                    } else {
                        List<Availability> newList = new ArrayList<>();
                        newList.add(oUserAvail);
                        matches.put(oUser, newList);
                    }
                }
            }
        }
        return matches;
    }

    public Availability updateStartTime(Long availabilityId, Float newStartTime) {
        Availability avail = availRepo.findById(availabilityId)
                .orElseThrow(() -> new EntityNotFoundException("" + availabilityId));
        avail.setStartTime(newStartTime);
        return availRepo.save(avail);
    }

    public Availability updateEndTime(Long availabilityId, Float newEndTime) {
        Availability avail = availRepo.findById(availabilityId)
                .orElseThrow(() -> new EntityNotFoundException("" + availabilityId));
        avail.setEndTime(newEndTime);
        return availRepo.save(avail);
    }

    public void deleteAvailability(Long availabilityId) {
        availRepo.deleteById(availabilityId);
    }
}
