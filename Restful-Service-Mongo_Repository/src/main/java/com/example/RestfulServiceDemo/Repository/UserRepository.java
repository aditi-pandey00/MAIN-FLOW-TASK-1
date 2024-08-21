package com.example.RestfulServiceDemo.Repository;

import com.example.RestfulServiceDemo.DAO_Layer.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User,Integer> {


    @Query("{'address.city' :{$in :[?0]}}")
    List<User> findAllUserFromCity(String city);

}
