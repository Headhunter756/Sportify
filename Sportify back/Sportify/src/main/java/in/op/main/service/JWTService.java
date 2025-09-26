package in.op.main.service;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;

@Service
public class JWTService {

	private String secretkey;
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
	
	@PostConstruct
	public void init() {
		try {
			KeyGenerator generator = KeyGenerator.getInstance("HmacSHA256");
			SecretKey sk = generator.generateKey();
			secretkey = Base64.getEncoder().encodeToString(sk.getEncoded());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private SecretKey retrivekey() {
		byte[] decode = Decoders.BASE64.decode(secretkey);
		return Keys.hmacShaKeyFor(decode);
	}
	
	public String encodePassword(String password) {
		return encoder.encode(password);
	}
	
	public String tokengen(String email) {
		Map<String, Object> claims = new HashMap<>();
		return Jwts
				.builder()
				.claims()
				.add(claims)
				.subject(email)
				.issuedAt(new Date(System.currentTimeMillis()))
				.and()
				.signWith(retrivekey())
				.compact();
	}
	
	private Claims extractAll(String token) {
		return Jwts.parser()
				.verifyWith(retrivekey())
				.build()
				.parseSignedClaims(token)
				.getPayload();
	}
	
	private <T> T extractClaim (String token, Function<Claims, T> resolver) {
		Claims claims = extractAll(token);
		return resolver.apply(claims);
	}
	
	public String extractUsername(String token) {
		return extractClaim(token, Claims::getSubject);
	}
	
	public boolean validate(String token, String username) {
		String subject = extractUsername(token);
		return (!username.isBlank() && username.equals(subject));
	}
}