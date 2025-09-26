package in.op.main.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import in.op.main.filter.JwtFilter;

@Configuration
@EnableWebSecurity
public class Config {
	
	@Autowired
	private UserDetailsService service;
	@Autowired
	private JwtFilter filter;

	@Bean
	public SecurityFilterChain filter(HttpSecurity http) throws Exception {
		return http
				.csrf(custom -> custom.disable())
				.cors(customizer -> customizer.configurationSource(source()))
				.httpBasic(Customizer.withDefaults())
				.formLogin(custom -> custom.disable())
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(request -> request
						.requestMatchers("/auth/**")
						.permitAll()
						.anyRequest()
						.authenticated()
						)
				.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class)
				.build();
	}
	
	@Bean
	public AuthenticationManager manager(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}
	
	@Bean
	public AuthenticationProvider provider() {
		DaoAuthenticationProvider provide = new DaoAuthenticationProvider(service);
		provide.setPasswordEncoder(new BCryptPasswordEncoder(12));
		return provide;
	}
	
	@Bean
	public CorsConfigurationSource source() {
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowedHeaders(List.of("Authorization","Content-Type"));
		config.setAllowedMethods(List.of("GET","POST","PUT","DELETE","OPTIONS"));
		config.setAllowedOrigins(List.of("http://localhost:5173/"));
		UrlBasedCorsConfigurationSource url = new UrlBasedCorsConfigurationSource();
		url.registerCorsConfiguration("/**", config);
		return url;
	}
}
