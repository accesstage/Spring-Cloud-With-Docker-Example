package com.company.example.repository;

import com.company.example.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by leonardotonin on 17/11/16.
 */
public interface UserRepository extends MongoRepository<User, String> {
}
