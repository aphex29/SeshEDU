package com.seshedu.backend.user;

public interface User {

    Long getId();

    String getUsername();

    String getName();

    String getEmail();

    String getCity();

    String getState();

    void setUsername(String newUsername);

    void setName(String newName);

    void setCity(String newCity);

    void setState(String newState);
}
