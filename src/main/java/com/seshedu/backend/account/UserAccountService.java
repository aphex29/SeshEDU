package com.seshedu.backend.account;

import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAccountService {
    UserAccountRepository accountRepo;

    @Autowired
    public UserAccountService(UserAccountRepository accountRepo) {
        this.accountRepo = accountRepo;
    }

    public UserAccount createAccount(Long userId, String email, String username, String password) {
        UserAccount useraccount = new UserAccount(userId, email, username, password);
        return accountRepo.save(useraccount);

    }

    public Boolean verifyAccount(String username, String password) {
        Boolean ret = false;
        UserAccount account = accountRepo.findByUsername(username)
            .orElseThrow(() -> new EntityNotFoundException(username));
        Long currId = account.getUserId();
        String currUsername = account.getUsername();
        String currPass = account.getPassword();
        if (currUsername.equals(username) && currPass.equals(password)){ret = true;}
        return ret;

    }

    public void updatePassword(Long accountId, String password) {
        UserAccount newUserPass = accountRepo.findById(accountId)
            .orElseThrow(() -> new EntityNotFoundException("" + accountId));
        newUserPass.setPassword(password);
        accountRepo.save(newUserPass);
    }

    public void deleteAccount(Long accountId) {
        UserAccount delUserAccount = accountRepo.findById(accountId)
            .orElseThrow(() -> new EntityNotFoundException("" + accountId));
        accountRepo.delete(delUserAccount);


    }

}
