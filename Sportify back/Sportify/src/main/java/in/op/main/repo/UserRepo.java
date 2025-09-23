package in.op.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.op.main.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long>
{
	boolean existsByEmail(String email);
	User findByEmail(String email);
}
