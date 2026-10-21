package com.example.productservice.config;

import com.example.productservice.model.Product;
import com.example.productservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Create sample products if they don't exist
        if (productRepository.count() == 0) {
            createSampleProducts();
        }
    }

    private void createSampleProducts() {
        // Electronics
        Product laptop = new Product();
        laptop.setName("MacBook Pro 16-inch");
        laptop.setDescription("Apple MacBook Pro with M2 chip, 16GB RAM, 512GB SSD");
        laptop.setPrice(new BigDecimal("2499.99"));
        laptop.setStockQuantity(10);
        laptop.setCategory("Electronics");
        laptop.setBrand("Apple");
        laptop.setSku("MBP16-M2-512");
        laptop.setIsActive(true);
        productRepository.save(laptop);

        Product phone = new Product();
        phone.setName("iPhone 15 Pro");
        phone.setDescription("Latest iPhone with A17 Pro chip and titanium design");
        phone.setPrice(new BigDecimal("999.99"));
        phone.setStockQuantity(25);
        phone.setCategory("Electronics");
        phone.setBrand("Apple");
        phone.setSku("IP15-PRO-128");
        phone.setIsActive(true);
        productRepository.save(phone);

        // Clothing
        Product tshirt = new Product();
        tshirt.setName("Cotton T-Shirt");
        tshirt.setDescription("Comfortable 100% cotton t-shirt in various colors");
        tshirt.setPrice(new BigDecimal("19.99"));
        tshirt.setStockQuantity(50);
        tshirt.setCategory("Clothing");
        tshirt.setBrand("Generic");
        tshirt.setSku("TSHIRT-COTTON-001");
        tshirt.setIsActive(true);
        productRepository.save(tshirt);

        Product jeans = new Product();
        jeans.setName("Blue Denim Jeans");
        jeans.setDescription("Classic blue denim jeans with modern fit");
        jeans.setPrice(new BigDecimal("79.99"));
        jeans.setStockQuantity(30);
        jeans.setCategory("Clothing");
        jeans.setBrand("Levi's");
        jeans.setSku("JEANS-BLUE-32");
        jeans.setIsActive(true);
        productRepository.save(jeans);

        // Books
        Product book = new Product();
        book.setName("Clean Code");
        book.setDescription("A Handbook of Agile Software Craftsmanship by Robert C. Martin");
        book.setPrice(new BigDecimal("39.99"));
        book.setStockQuantity(15);
        book.setCategory("Books");
        book.setBrand("Prentice Hall");
        book.setSku("BOOK-CLEAN-CODE");
        book.setIsActive(true);
        productRepository.save(book);

        // Home & Garden
        Product chair = new Product();
        chair.setName("Office Chair");
        chair.setDescription("Ergonomic office chair with lumbar support");
        chair.setPrice(new BigDecimal("199.99"));
        chair.setStockQuantity(8);
        chair.setCategory("Home & Garden");
        chair.setBrand("Herman Miller");
        chair.setSku("CHAIR-OFFICE-001");
        chair.setIsActive(true);
        productRepository.save(chair);

        System.out.println("✅ Sample products created successfully!");
    }
}
