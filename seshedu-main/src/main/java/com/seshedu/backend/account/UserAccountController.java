package com.seshedu.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Map;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserAccountController {
    UserAccountService service;

    @Autowired
    public UserAccountController(UserAccountService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/account")
    public UserAccount createAccount(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/get/account/verify")
    public Boolean verifyAccount(@RequestBody Map<String, String> json) {
        return null;
    }

    @PostMapping("/api/v1/update/account/password")
    public void updatePassword(@RequestBody Map<String, String> json) {

    }

    @PostMapping("/api/v1/delete/account")
    public void deleteAccount(@RequestBody Map<String, String> json) {

    }
}
