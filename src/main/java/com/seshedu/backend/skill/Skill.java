package com.seshedu.backend.skill;

import javax.persistence.*;

@Entity(name = "Skill")
@Table(name = "skill")
public class Skill {
    @Id
    @SequenceGenerator(
            name = "skill_sequence",
            sequenceName = "skill_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "skill_sequence"
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
            name = "skill",
            nullable = false
    )
    private String skill;

    public Skill(Long userId, String skill ) {
        this.userId = userId;
        this.skill = skill;

    }

    public Skill(){}//empty constructor

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getSkill() {
        return skill;
    }

    public void setUserId(Long newUserId){
        userId = newUserId;
    }

    public void setSkill(String newSkill){

        skill = newSkill;
    }

}
