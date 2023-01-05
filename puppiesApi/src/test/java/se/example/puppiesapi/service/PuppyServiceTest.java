package se.example.puppiesapi.service;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.example.puppiesapi.model.Puppy;
import se.example.puppiesapi.model.dto.NewPuppyDTO;
import se.example.puppiesapi.model.dto.PuppyDTO;
import se.example.puppiesapi.repository.JPAPuppyRepository;
import se.example.puppiesapi.repository.PuppyRepository;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
class PuppyServiceTest {

    @Autowired
    private JPAPuppyRepository jpaPuppyRepository;
    private PuppyService puppyService;
    private PuppyRepository puppyRepositoryMock;
    private Puppy puppy1;

    @BeforeEach
    void setUp() {
        puppyRepositoryMock = mock(PuppyRepository.class);
        puppyService = new PuppyService(puppyRepositoryMock);
        puppy1 = new Puppy(
                "Golden Retriever",
                "Bamse",
                LocalDateTime.of(1999, 12, 12, 6, 45)
        );
    }

    @AfterEach
    void tearDown() {
        jpaPuppyRepository.deleteAll();
    }

    @Test
    void findAll() {
        List<Puppy> expected = List.of(puppy1, puppy1, puppy1);
        when(puppyRepositoryMock.findAll()).thenReturn(expected);
        List<PuppyDTO> actualDTOs = puppyService.findAll();
        for (int i = 0; i < expected.size(); i++) {
            assertEquals(expected.get(i).getName(), actualDTOs.get(i).name());
        }
    }

    @Test
    void findById() {
        when(puppyRepositoryMock.findById(anyLong())).thenReturn(puppy1);
        assertEquals(puppy1.getName(), puppyService.findById(anyLong()).name());
    }

    @Test
    void createNew() {
        when(puppyRepositoryMock.save(any(Puppy.class))).thenReturn(puppy1);
        NewPuppyDTO puppyDTO = new NewPuppyDTO(
                "Doge",
                "Coin",
                "2020-01-01"
        );
        PuppyDTO created = puppyService.createNew(puppyDTO);
        assertEquals(puppy1.getName(), created.name());
    }

    @Test
    void update() {

    }

    @Test
    void deleteById() {
    }
}