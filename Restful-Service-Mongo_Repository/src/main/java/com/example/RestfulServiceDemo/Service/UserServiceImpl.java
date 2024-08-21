package com.example.RestfulServiceDemo.Service;

import com.example.RestfulServiceDemo.DAO_Layer.User;
import com.example.RestfulServiceDemo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserServiceImpl implements UserService{


    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> saveMultipleUser(List<User> users) {
        return (List<User>) userRepository.saveAll(users);
    }

    @Override
    public User updateUser(User newUser) {
        User user =null;
        Optional<User> oldUser = userRepository.findById(newUser.getUserId());
        if (oldUser.isPresent()){
            user = oldUser.get();
//            user.setUserName(newUser.getUserName());
//            user.setEmail(newUser.getEmail());
//            user.setPhone(newUser.getPhone());
//            user.setAddress(newUser.getAddress());
            user.setTask(newUser.getTask());
            userRepository.save(user);
        }
        else {
            return new User();
        }
        return user;
    }

    @Override
    public void deleteUserById(int id) {
        userRepository.deleteById(id);

    }

    @Override
    public List<User> getAllUser() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).get();
    }


    //custom method
    @Override
    public List<User> findByCityName(String city) {
        return userRepository.findAllUserFromCity(city);
    }
}
