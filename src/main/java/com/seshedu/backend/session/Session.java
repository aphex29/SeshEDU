package com.seshedu.backend.session;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Session {
    @Id
    @SequenceGenerator(
            name = "session_sequence",
            sequenceName = "session_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "session_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id; //session id

    @Column(
            name = "user_id",
            nullable = false
    )
    private Long userId;



    @Column(
            name = "sessionType",
            nullable = false
    )
    private String sessionType;

    //called groupId in schema but sessionGroupId in the other structure table
    @Column(
            name = "groupId",
            nullable = false
    )
    private Long groupId;

    @Column(
            name = "status",
            nullable = false
    )
    private String status;

    @Column(
            name = "date",
            nullable = false
    )
    private Date date;


    @Column(
            name = "startTime",
            nullable = false
    )
    private Float startTime;

    @Column(
            name = "endTime",
            nullable = false
    )
    private Float endTime;

    private String session;

    public Session(Long userId, String sessionType, Long groupId, String status, Date date, Float startTime, Float endTime ) {
        this.userId = userId;
        this.sessionType = sessionType;
        this.groupId = groupId;
        this.status = status;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;


    }

    public Session(){}





}
