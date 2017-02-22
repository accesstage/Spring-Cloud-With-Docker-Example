package com.company.example.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

/**
 * Created by leonardotonin on 17/11/16.
 */
@AllArgsConstructor
@Data
@NoArgsConstructor
public class User {

    @Id
    private String id;

    private String email;
    private String nickName;
    private String password;


}
