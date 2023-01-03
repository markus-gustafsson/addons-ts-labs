package se.example.puppiesapi.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import se.example.puppiesapi.model.Puppy;

import java.util.List;
import java.util.NoSuchElementException;

@Repository
public class PuppyRepository {
    private JPAPuppyRepository jpaPuppyRepository;
    @Autowired
    public PuppyRepository(JPAPuppyRepository jpaPuppyRepository) {
        this.jpaPuppyRepository = jpaPuppyRepository;
    }

    public Puppy save(Puppy puppy) {
        return jpaPuppyRepository.save(puppy);
    }

    public List<Puppy> findAll() {
        return (List<Puppy>) jpaPuppyRepository.findAll();
    }

    public Puppy findById(Long id) throws NoSuchElementException {
        return jpaPuppyRepository.findById(id).orElseThrow();
    }

    public void deleteById(Long id) {
        jpaPuppyRepository.deleteById(id);
    }
}
