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

    @PostMapping("/api/v1/create/session")
    public Session createSession(Long userId, String sessionType, Long groupId, String status,
                               Date date, Float startTime, Float endTime) {

        Session newSession = new Session(userId, sessionType, groupId, status, date, startTime, endTime)
                return sessionRepo.save(newSession);
    }

    @PostMapping("/api/v1/get/session/all")
    public List<Session> getSessions(@RequestBody Map<String, String> json) {
//confused by this one and the next
        List<Session> sessions = sessionRepo.findByUserId(userId).orElseThrow(()-> new EntityNotFoundException(""+ userId));
        return sessions;

    }

    @PostMapping("/api/v1/delete/session")
    public void deleteSession(@RequestBody Map<String, String> json) {

    }
}
