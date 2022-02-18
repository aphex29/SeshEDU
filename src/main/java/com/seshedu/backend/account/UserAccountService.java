package com.seshedu.backend.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAccountService {
    UserAccountRepository accountRepo;

    @Autowired
    public UserAccountService(UserAccountRepository accountRepo) {
        this.accountRepo = accountRepo;
    }

    public UserAccount createAccount(Long userId, String email, String password) {
        return null;
    }

    public Boolean verifyAccount(Long userId, String email, String password) {
        return null;

    }

    public void updatePassword(Long accountId, String password) {

    }

    public void deleteAccount(Long accountId) {

    }

}
