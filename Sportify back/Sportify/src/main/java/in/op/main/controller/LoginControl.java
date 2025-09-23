package in.op.main.controller;

import org.springframework.web.bind.annotation.RestController;

import in.op.main.entities.User;
import in.op.main.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class LoginControl {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		User reg = userService.register(user);
		if (reg!=null) {
			return ResponseEntity.accepted().body("User Registered");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("User Already Exists");
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		User log =  userService.login(user.getEmail(), user.getPassword());
		if (log!=null) {
			if (!log.getName().equals("Password Incorrect")) {
				return ResponseEntity.ok("Welcome Champ");
			} else {
				return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Invalid Email or Password.");
			}
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
}
