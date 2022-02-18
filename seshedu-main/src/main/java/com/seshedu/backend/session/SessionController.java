package com.seshedu.backend.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

public class SessionController {
    public SessionService service;

    @Autowired
    public SessionController(SessionService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/session")
    public Session createSession(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/session/all")
    public List<Session> getSessions(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/delete/session")
    public void deleteSession(@RequestBody Map<String, String> json) {

    }
}
