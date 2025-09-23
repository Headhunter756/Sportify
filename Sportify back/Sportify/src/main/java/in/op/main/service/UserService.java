package in.op.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.op.main.entities.User;
import in.op.main.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;
	
	public User register(User user) {
		if (!repo.existsByEmail(user.getEmail())) {
			User u = repo.save(user);
			return u;
		} else {
			return null;
		}
	}
	
	public User login(String email, String password) {
		if (repo.existsByEmail(email)) {
			User user = repo.findByEmail(email);
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
