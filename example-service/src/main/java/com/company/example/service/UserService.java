package com.company.example.service;

import com.company.example.domain.User;
import com.company.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Created by leonardotonin on 17/11/16.
 */
@Component
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User add(User user) {

        return repository.save(user);
    }

}
