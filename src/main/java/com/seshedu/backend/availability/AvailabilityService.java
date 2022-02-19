package com.seshedu.backend.availability;

import com.seshedu.backend.session.Session;
import com.seshedu.backend.user.User;
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class AvailabilityService {
    AvailabilityRepository availRepo;

    @Autowired
    public AvailabilityService(AvailabilityRepository availRepo) {
        this.availRepo = availRepo;
    }

    public Availability createAvailability(Long userId, LocalDate date, Float StartTime, Float endTime) {
        return null;
    }

    public List<Availability> getAvailability(Long userId) {
        return null;
    }

    public Map<User, List<Availability>> getAvailableMatches(Long userId) {
        return null;
    }

    public Availability updateStartTime(Long availabilityId, Float newStartTime) {
        return null;
    }

    public Availability updateEndTime(Long availabilityId, Float newrEndTime) {
        return null;
    }

    public void deleteAvailability(Long availabilityId) {
    }
}
