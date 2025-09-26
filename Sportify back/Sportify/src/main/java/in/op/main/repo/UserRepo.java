package in.op.main.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.op.main.entities.Player;

@Repository
public interface UserRepo extends JpaRepository<Player,Long>
{
	boolean existsByEmail(String email);
	Player findByEmail(String email);
}
