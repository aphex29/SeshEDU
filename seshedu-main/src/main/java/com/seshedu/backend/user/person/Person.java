package com.seshedu.backend.user.person;


import com.seshedu.backend.user.User;
import jdk.jfr.DataAmount;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Person implements User {
    @Id
    private Long id;
}
