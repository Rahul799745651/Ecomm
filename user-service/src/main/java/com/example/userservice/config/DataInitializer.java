package com.example.userservice.config;

import com.example.userservice.model.User;
import com.example.userservice.model.UserRole;
import com.example.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Create sample users if they don't exist
        if (userRepository.count() == 0) {
            createSampleUsers();
        }
    }

    private void createSampleUsers() {
        // Create admin user
        User admin = new User();
        admin.setUsername("admin");
        admin.setEmail("admin@example.com");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setFirstName("Admin");
        admin.setLastName("User");
        admin.setRole(UserRole.ADMIN);
        admin.setIsActive(true);
        userRepository.save(admin);

        // Create customer user
        User customer = new User();
        customer.setUsername("john_doe");
        customer.setEmail("john@example.com");
        customer.setPassword(passwordEncoder.encode("password123"));
        customer.setFirstName("John");
        customer.setLastName("Doe");
        customer.setRole(UserRole.CUSTOMER);
        customer.setIsActive(true);
        userRepository.save(customer);

        // Create seller user
        User seller = new User();
        seller.setUsername("jane_seller");
        seller.setEmail("jane@example.com");
        seller.setPassword(passwordEncoder.encode("seller123"));
        seller.setFirstName("Jane");
        seller.setLastName("Smith");
        seller.setRole(UserRole.SELLER);
        seller.setIsActive(true);
        userRepository.save(seller);

        System.out.println("✅ Sample users created successfully!");
    }
}
