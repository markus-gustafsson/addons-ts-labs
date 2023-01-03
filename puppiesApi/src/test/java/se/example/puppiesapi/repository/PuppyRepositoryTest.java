package se.example.puppiesapi.repository;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.example.puppiesapi.model.Puppy;

import java.time.LocalDateTime;
import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PuppyRepositoryTest {

    @Autowired
    private PuppyRepository puppyRepository;
    @Autowired
    private JPAPuppyRepository jpaPuppyRepository;
    private Puppy puppy1;


    @BeforeEach
    void setUp() {
        puppy1 = new Puppy(
                "Golden Retriever",
                "Bamse",
                LocalDateTime.of(1999, 12, 12, 6, 45)
        );
        puppyRepository.save(puppy1);
    }

    @AfterEach
    void tearDown() {
        jpaPuppyRepository.deleteAll();
    }

    @Test
    void saveShouldSaveToDatabaseAndReturnSavedPuppy() {
        Puppy puppy2 = new Puppy(
                "Cocker Spaniel",
                "Helga",
                LocalDateTime.of(2020, 4, 6, 0, 0)
        );
        Puppy saved = puppyRepository.save(puppy2);
        assertEquals(puppy2.getId(), saved.getId());
        assertEquals(2, puppyRepository.findAll().size());
    }

    @Test
    void findAllShouldReturnOnePuppy() {
        int expected = 1;
        int actual = puppyRepository.findAll().size();
        assertEquals(expected, actual);
    }

    @Test
    void findByIdShouldReturnCorrectPuppyForValidId() {
        Long id = puppy1.getId();
        Puppy byId = puppyRepository.findById(id);
        assertEquals(puppy1.getId(), byId.getId());
        assertEquals(puppy1.getName(), byId.getName());
    }

    @Test
    void findByIdShouldThrowExceptionForNonExistingId() {
        Long id = 100L;
        assertThrows(NoSuchElementException.class, () -> {
            puppyRepository.findById(id);
        });
    }

    @Test
    void deleteByIdShouldDeletePuppy1FromDatabase() {
        assertEquals(1, puppyRepository.findAll().size());
        Long id = puppy1.getId();
        puppyRepository.deleteById(id);
        assertEquals(0, puppyRepository.findAll().size());
    }
}