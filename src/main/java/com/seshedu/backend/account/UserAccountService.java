package com.seshedu.backend.account;

import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserAccountService {
    UserAccountRepository accountRepo;
    PasswordEncoder encoder;

    @Autowired
    public UserAccountService(UserAccountRepository accountRepo) {
        this.accountRepo = accountRepo;
        this.encoder = new Pbkdf2PasswordEncoder();
    }

    public UserAccount createAccount(String email, String username, String password) {
        String passwordHash = encoder.encode(password);
        UserAccount useraccount = new UserAccount(email, username, passwordHash);
        return accountRepo.save(useraccount);

    }

    public Boolean verifyAccount(String username, String password) {
        Boolean ret = false;
        if (accountRepo.findExistByUsername(username)) {
            UserAccount account = accountRepo.findByUsername(username)
                    .orElseThrow(() -> new EntityNotFoundException(username));
            String currUsername = account.getUsername();
            String currPass = account.getPassword();
            if (currUsername.equals(username) && encoder.matches(password, currPass)){ret = true;}
        }
        return ret;
    }

    public void updatePassword(Long accountId, String password) {
        UserAccount newUserPass = accountRepo.findById(accountId)
            .orElseThrow(() -> new EntityNotFoundException("" + accountId));
        String newPasswordHash = encoder.encode(password);
        newUserPass.setPassword(newPasswordHash);
        accountRepo.save(newUserPass);
    }

    public void deleteAccount(Long accountId) {
        UserAccount delUserAccount = accountRepo.findById(accountId)
            .orElseThrow(() -> new EntityNotFoundException("" + accountId));
        accountRepo.delete(delUserAccount);
    }

}
