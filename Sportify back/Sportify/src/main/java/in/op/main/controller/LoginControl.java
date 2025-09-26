package in.op.main.controller;

import org.springframework.web.bind.annotation.RestController;

import in.op.main.entities.Player;
import in.op.main.service.PlayerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/auth")
public class LoginControl {

	@Autowired
	private PlayerService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody Player user) {
		Player reg = userService.register(user);
		if (reg!=null) {
			return ResponseEntity.accepted().body("User Registered");
		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("User Already Exists");
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Player user) {
		Player log =  userService.login(user.getEmail(), user.getPassword());
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
