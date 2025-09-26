package in.op.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import in.op.main.entities.Player;
import in.op.main.principals.PlayerPrincipal;
import in.op.main.repo.UserRepo;

@Service
public class PlayerDetails implements UserDetailsService{

	@Autowired
	private UserRepo repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Player user =  repo.findByEmail(username);
		if (user!=null) {
			return new PlayerPrincipal(user);
		} else {
			return null;
		}
	}
}
