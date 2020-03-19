package com.nad.webshop;

import com.nad.webshop.entity.Product;
import com.nad.webshop.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WebshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProductRepository repository) {
		return args -> {
			repository.save(new Product(101, "Kamenice", 89.50, 0, "StonEri", "Svjeze stonske kamenice"));
			repository.save(new Product(102, "Dagnje", 45.00, 10, "RiAdria", "Dagnje iz Limskog kanala"));
		};
	}
}
