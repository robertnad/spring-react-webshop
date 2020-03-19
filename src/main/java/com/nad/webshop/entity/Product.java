package com.nad.webshop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/*domain object that represents a drink with properties
* of id, name, price and alcohol percentage*/

@Entity
public class Product {

    @Id @GeneratedValue
    private long id;
    private String name;
    private double price;
    private int discount;
    private String manufacturer;
    private String description;

    protected Product() {};

    public Product(long id, String name, double price, int discount, String manufacturer, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = discount;
        this.manufacturer = manufacturer;
        this.description = description;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", discount=" + discount +
                ", manufacturer='" + manufacturer + '\'' +
                ", description='" + description + '\'' +
                '}';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
