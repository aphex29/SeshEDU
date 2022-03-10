package com.seshedu.backend.user.person;


import com.seshedu.backend.user.User;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import jdk.jfr.DataAmount;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "Person")
@Table(name = "person")
public class Person implements User {
    @Id
    @SequenceGenerator(
        name = "person_sequence",
        sequenceName = "person_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator = "person_sequence"
    )
    @Column(
        name = "id",
        updatable = false
    )
    private Long id;

    @Column(
            name = "account_id",
            nullable = false,
            updatable = false
    )
    private Long accountId;

    @Column(
        name = "username",
        nullable = false
    )
    private String username;

    @Column(
        name = "name",
        nullable = false
    )
    private String name;

    @Column(
        name = "email",
        nullable = false
    )
    private String email;

    @Column(
        name = "city"
    )
    private String city;

    @Column(
        name = "state"
    )
    private String state;

    public Person(){}
    public Person(Long accountId, String username, String name, String email, String city, String state){
        this.accountId = accountId;
        this.username = username;
        this.name = name;
        this.email = email;
        this.city = city;
        this.state = state;
    }

    public Long getId() { return id; }
    public Long getAccountId() { return accountId; }
    public String getUsername() { return username; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getCity() { return city; }
    public String getState() { return state; }

    public void setUsername(String newUsername) {username = newUsername;}
    public void setName(String newName) { name = newName; }
    public void setEmail(String newEmail) { email = newEmail; }
    public void setCity(String newCity) { city = newCity; }
    public void setState(String newState) { state = newState; }

    @Override
    public String toString() {
        return "Person[id=" + id + ", username=" + username + ", email=" + email
            + ", city=" + city + ", state=" + state+ "]";
    }
}
