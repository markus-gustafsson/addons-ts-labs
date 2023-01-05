package se.example.puppiesapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.example.puppiesapi.model.Puppy;
import se.example.puppiesapi.model.dto.NewPuppyDTO;
import se.example.puppiesapi.model.dto.PuppyConverter;
import se.example.puppiesapi.model.dto.PuppyDTO;
import se.example.puppiesapi.repository.PuppyRepository;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
public class PuppyService {
    private final PuppyRepository puppyRepository;

    @Autowired
    public PuppyService(PuppyRepository puppyRepository) {
        this.puppyRepository = puppyRepository;
    }

    public List<PuppyDTO> findAll() {
        List<Puppy> puppies = puppyRepository.findAll();
        return puppies.stream()
                .map(PuppyConverter::fromPuppyToPuppyDTO)
                .toList();
    }

    public PuppyDTO findById(Long id) {
        Puppy puppy = puppyRepository.findById(id);
        return PuppyConverter.fromPuppyToPuppyDTO(puppy);
    }

    public PuppyDTO createNew(NewPuppyDTO newPuppyDTO) {
        Puppy puppy = new Puppy(
                newPuppyDTO.breed(),
                newPuppyDTO.name(),
                getBirthDate(newPuppyDTO)

        );
        Puppy saved = puppyRepository.save(puppy);
        return PuppyConverter.fromPuppyToPuppyDTO(saved);
    }

    private static LocalDateTime getBirthDate(NewPuppyDTO newPuppyDTO) {
        if (!newPuppyDTO.birthDate().matches("\\d{4}\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01])*")) {
            return null;
        }
        String[] stringArrYYYYMMDD = newPuppyDTO.birthDate().split("-");
        List<Integer> integers = Arrays.stream(stringArrYYYYMMDD)
                .map(Integer::parseInt)
                .toList();
        int year = integers.get(0);
        int month = integers.get(1);
        int day = integers.get(2);
        return LocalDateTime.of(year, month, day, 0, 0);
    }

    public PuppyDTO update(Long id, NewPuppyDTO newPuppyDTO) {
        Puppy puppy = puppyRepository.findById(id);
        if (newPuppyDTO.name() != null) puppy.setName(newPuppyDTO.name());
        if (newPuppyDTO.breed() != null) puppy.setBreed(newPuppyDTO.breed());
        if (newPuppyDTO.birthDate() != null) puppy.setBirthDate(getBirthDate(newPuppyDTO));
        Puppy updatedPuppy = puppyRepository.save(puppy);
        return PuppyConverter.fromPuppyToPuppyDTO(updatedPuppy);
    }

    public void deleteById(Long id) {
        puppyRepository.deleteById(id);
    }
}
