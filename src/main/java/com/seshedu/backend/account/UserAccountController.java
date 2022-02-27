package com.seshedu.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserAccountController {
    UserAccountService service;

    @Autowired
    public UserAccountController(UserAccountService service) {
        this.service = service;
    }

    @PostMapping("/api/v1/create/account")
    public UserAccount createAccount(@RequestBody Map<String, String> json) {
        String email = json.get("email");
        String username = json.get("username");
        String password = json.get("password");
        return service.createAccount(email,username,password);
    }

    @PostMapping("/api/v1/get/account/verify")
    public Boolean verifyAccount(@RequestBody Map<String, String> json) {
        String username = json.get("username");
        String password = json.get("password");
        return service.verifyAccount(username, password);
    }

    @PostMapping("/api/v1/update/account/password")
    public void updatePassword(@RequestBody Map<String, String> json) {
        Long accountId = Long.parseLong(json.get("accountId"));
        String password = json.get("password");
        service.updatePassword(accountId,password);
    }

    @PostMapping("/api/v1/delete/account")
    public void deleteAccount(@RequestBody Map<String, String> json) {
        Long accountId = Long.parseLong(json.get("id"));
        service.deleteAccount(accountId);
    }
}
