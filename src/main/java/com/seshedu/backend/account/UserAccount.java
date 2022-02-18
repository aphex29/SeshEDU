package com.seshedu.backend.account;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity(name = "UserAccount")
@Table(name = "useraccount")
public class UserAccount {
    @Id
    @SequenceGenerator(
        name = "userAccount_sequence",
        sequenceName = "userAccount_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "userAccount_sequence"
    )
    @Column(
        name = "id",
        updatable = false
    )
    private Long id;

    @Column(
        name = "user_id",
        nullable = false
    )
    private Long userId;

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
    public UserAccount(Long userId, String email, String username, String password){
        this.userId = userId;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }
    public Long getUserId() {
        return userId;
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
        return "UserAccount[id=" + id + ", userId=" + userId + ", email=" + email
            + ", username=" + username + ", password=" + password + "]";
    }
}
