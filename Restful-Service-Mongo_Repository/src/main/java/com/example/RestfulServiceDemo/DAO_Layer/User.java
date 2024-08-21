package com.example.RestfulServiceDemo.DAO_Layer;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document
public class User {

    @Id
    int userId;
    String userName ;
    String address;
    String email;
    String phone;
    String task;




}
