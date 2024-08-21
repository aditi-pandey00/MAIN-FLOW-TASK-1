package com.example.RestfulServiceDemo.Controller;

import com.example.RestfulServiceDemo.DAO_Layer.User;
import com.example.RestfulServiceDemo.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class UserController {




    private UserServiceImpl userService;
    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping("/save")
    public ResponseEntity<?>  create(@RequestBody User user){
        User user1 = userService.saveUser(user);
        return  new ResponseEntity<>("user successfully saved"+user1, HttpStatus.CREATED);

    }

    @PostMapping("/save-multiple")
    public ResponseEntity<?>  createMultiple(@RequestBody List<User> user){
        List<User> userList = userService.saveMultipleUser(user);
        return  new ResponseEntity<>("user successfully saved"+userList, HttpStatus.CREATED);

    }

    @GetMapping("/get-user/{id}")
    public ResponseEntity<?>  read(@PathVariable int id){
        User user1 = userService.getUserById(id);
        return  new ResponseEntity<>(user1, HttpStatus.OK);

    }

    @GetMapping("/get-all")
    public ResponseEntity<?>  readAll(){
        List<User> user1 = userService.getAllUser();
        return  new ResponseEntity<>(user1, HttpStatus.CREATED);

    }

    @PutMapping("/update-user")
    public ResponseEntity<?>  update(@RequestBody User user){
        User user1 = userService.updateUser(user);
        return  new ResponseEntity<>("user successfully updated"+user1, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?>  delete(@PathVariable int id){
        userService.deleteUserById(id);
        return  new ResponseEntity<>("user successfully deleted", HttpStatus.CREATED);

    }

    @GetMapping("/get-city/{city}")
    public ResponseEntity<?>  readCity(@PathVariable String city){
        List<User> user1 = userService.findByCityName(city);
        return  new ResponseEntity<>(user1, HttpStatus.CREATED);

    }













}
