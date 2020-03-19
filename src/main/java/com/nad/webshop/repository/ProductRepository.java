package com.nad.webshop.repository;

import com.nad.webshop.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    /*
    //INSERT INTO Drink VALUES(id, name, price, alcPerc)
    int insertDrink(UUID id, Drink drink);
    default int insertDrink(Drink drink) {
        UUID id = UUID.randomUUID();
        return insertDrink(id, drink);
    }

    //SELECT * FROM Drink
    List<Drink> selectAllDrinks();

    //SELECT * FROM Drink WHERE id="id"
    Optional<Drink> selectDrinkById(UUID id);

    //UPDATE Drink SET id=?, name="", price=x, alcPerc=y WHERE id="id"
    int updateDrinkById(UUID id, Drink drink);

    //DELETE FROM Drink WHERE id="id"
    int deleteDrinkById(UUID id);

    //SELECT * FROM Drink WHERE name="name"
    Optional<Drink> selectDrinkByName(String name);
    */
    /*existing JpaRepository methods: save, findAll, delete, deleteAll,...*/
}
