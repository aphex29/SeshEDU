package com.seshedu.backend.account;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity(name = "UserAccount")
@Table(name = "user_account")
public class UserAccount {
    @Id
    @SequenceGenerator(
        name = "user_account_sequence",
        sequenceName = "user_account_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "user_account_sequence"
    )
    @Column(
        name = "id",
        updatable = false
    )
    private Long id;

    @Column(
        name = "email",
        nullable = false
    )
    private String email;

    @Column(
        name = "username",
        nullable = false
    )
    private String username;

    @Column(
        name = "password",
        nullable = false
    )
    private String password;

    public UserAccount(){}
    public UserAccount(String email, String username, String password){
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String newPass) {password = newPass;}

    @Override
    public String toString() {
        return "UserAccount[id=" + id + ", email=" + email
            + ", username=" + username + ", password=" + password + "]";
    }
}
