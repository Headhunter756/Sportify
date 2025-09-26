package in.op.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.op.main.entities.Player;
import in.op.main.repo.UserRepo;

@Service
public class PlayerService {

	@Autowired
	private UserRepo repo;
	
	public Player register(Player user) {
		if (!repo.existsByEmail(user.getEmail())) {
			Player u = repo.save(user);
			return u;
		} else {
			return null;
		}
	}
	
	public Player login(String email, String password) {
		if (repo.existsByEmail(email)) {
			Player user = repo.findByEmail(email);
			if (user.getPassword().equals(password)) {
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
