package com.seshedu.backend.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.persistence.EntityNotFoundException;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class SessionService {
    SessionRepository sessionRepo;

    @Autowired
    public SessionService(SessionRepository sessionRepo) {
        this.sessionRepo = sessionRepo;
    }


    public Session createSession(Long userId, String sessionType, Long groupId, String status,
                               Date date, Float startTime, Float endTime) {

        Session newSession = new Session(userId, sessionType, groupId, status, date, startTime, endTime);
        //return sessionRepo.save(newSession);
        return null;
    }


    public List<Session> getSessions() {
//confused by this one and the next
        //List<Session> sessions = sessionRepo.findByUserId(userId).orElseThrow(()-> new EntityNotFoundException(""+ userId));
        return null;

    }


    public void deleteSession(@RequestBody Map<String, String> json) {

    }
}
