package in.op.main.controller;

import org.springframework.web.bind.annotation.RestController;

import in.op.main.entities.Player;
import in.op.main.service.JWTService;
import in.op.main.service.PlayerService;

import java.util.HashMap;
import java.util.Map;

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
	@Autowired
	private JWTService jwtService;
	
	@PostMapping("/playerReg")
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
		Map<String, Object> response = new HashMap<>();
		if (log!=null) {
			if (!log.getName().equals("Password Incorrect")) {
				response.put("message", "Welcome Champ");
				response.put("token", "Bearer "+jwtService.tokengen(log.getEmail()));
				return ResponseEntity.ok(response);
			} else {
				response.put("message", "Invalid Email or Password.");
				return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(response);
			}
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
}
