package in.op.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import in.op.main.entities.Player;
import in.op.main.repo.UserRepo;

@Service
public class PlayerService {

	@Autowired
	private UserRepo repo;
	@Autowired
	private JWTService jwtService;
	
	public Player register(Player user) {
		if (!repo.existsByEmail(user.getEmail())) {
			user.setId(repo.count()+1);
			user.setPassword(jwtService.encodePassword(user.getPassword())); ;
			Player u = repo.save(user);
			return u;
		} else {
			return null;
		}
	}
	
	public Player login(String email, String password) {
		if (repo.existsByEmail(email)) {
			Player user = repo.findByEmail(email);
			if (jwtService.passwordMatcher(password, user.getPassword())) {
				return user;
			} else {
				user.setName("Password Incorrect");
				return user;
			}
		} else {			
			return null;
		}
	}
}
