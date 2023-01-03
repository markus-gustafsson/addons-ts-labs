package se.example.puppiesapi.repository;

import org.springframework.data.repository.CrudRepository;
import se.example.puppiesapi.model.Puppy;

public interface JPAPuppyRepository extends CrudRepository<Puppy, Long> {
}
