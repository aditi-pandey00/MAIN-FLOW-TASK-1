package com.example.RestfulServiceDemo.Service;


import com.example.RestfulServiceDemo.DAO_Layer.User;

import java.util.List;

public interface UserService {



    User saveUser(User user);

    List<User> saveMultipleUser(List<User> users);

    User updateUser(User user);

     void deleteUserById(int id);

     List<User> getAllUser();

     User getUserById(int id);

     List<User> findByCityName(String city);


}
