package com.nad.webshop.controller;

import com.nad.webshop.entity.Product;
import com.nad.webshop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/products")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping(path = "/findAll")
    public Iterable<Product> getAllProducts() {
        return repository.findAll();
    }

    @GetMapping(path = "{id}")
    public Product getProductById(@PathVariable("id") long id) {
        return repository.findById(id)
                .orElse(null);
    }

    @PostMapping
    public void addProduct(@RequestBody Product product) {
        repository.save(product);
    }

    @PutMapping(path = "{id}")
    public void updateProduct(@PathVariable("id") long id, @RequestBody Product productToUpdate) {
        repository.save(productToUpdate);
    }

    @DeleteMapping(path = "{id}")
    public void deleteProduct(@PathVariable("id") long id) {
        repository.deleteById(id);
    }

    /*
    @PutMapping("/products/{id}")
    Product updateProduct(@RequestBody Product productToUpdate, @PathVariable Long id) {
        return repository.findById(id)
                .map(x -> {
                    x.setName(productToUpdate.getName());
                    x.setPrice(productToUpdate.getPrice());
                    x.setDiscount(productToUpdate.getDiscount());
                    x.setManufacturer(productToUpdate.getManufacturer());
                    x.setDescription(productToUpdate.getDescription());
                    return repository.save(x);
                }).orElse(() -> {
                    productToUpdate.setId(id);
                    return repository.save(productToUpdate);
                });
    }
    */

}
