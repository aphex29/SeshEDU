package com.seshedu.backend.hobby;

import javax.persistence.*;

@Entity(name = "Hobby")
@Table(name = "hobby")
public class Hobby {
    @Id
    @SequenceGenerator(
            name = "hobby_sequence",
            sequenceName = "hobby_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "hobby_sequence"
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
            name = "hobby",
            nullable = false
    )
    private String hobby;

    public Hobby(Long userId, String hobby ) {
        this.userId = userId;
        this.hobby = hobby;

    }

    public Hobby(){}//empty constructor

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getHobby() {
        return hobby;
    }

    public void setUserId(Long newUserId){
        userId = newUserId;
    }

    public void setHobby(String newHobby){

        hobby = newHobby;
    }
}

