package se.example.puppiesapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.example.puppiesapi.model.Puppy;
import se.example.puppiesapi.model.dto.PuppyConverter;
import se.example.puppiesapi.model.dto.PuppyDTO;
import se.example.puppiesapi.repository.PuppyRepository;

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

    public PuppyDTO createNew(PuppyDTO puppyDTO) {
        Puppy puppy = PuppyConverter.fromPuppyDTOToPuppy(puppyDTO);
        Puppy saved = puppyRepository.save(puppy);
        return PuppyConverter.fromPuppyToPuppyDTO(saved);
    }

    public PuppyDTO update(Long id, PuppyDTO puppyDTO) {
        Puppy puppy = puppyRepository.findById(id);
        if (puppyDTO.name() != null) puppy.setName(puppyDTO.name());
        if (puppyDTO.breed() != null) puppy.setBreed(puppyDTO.breed());
        if (puppyDTO.birthDate() != null) puppy.setBirthDate(puppyDTO.birthDate());
        Puppy updatedPuppy = puppyRepository.save(puppy);
        return PuppyConverter.fromPuppyToPuppyDTO(updatedPuppy);
    }

    public void deleteById(Long id) {
        puppyRepository.deleteById(id);
    }
}
