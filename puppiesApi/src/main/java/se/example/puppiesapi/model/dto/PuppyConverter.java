package se.example.puppiesapi.model.dto;

import org.springframework.stereotype.Component;
import se.example.puppiesapi.model.Puppy;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Component
public class PuppyConverter {
    public static PuppyDTO fromPuppyToPuppyDTO(Puppy puppy) {
        return new PuppyDTO(
                puppy.getId(),
                puppy.getBreed(),
                puppy.getName(),
                puppy.getBirthDate()
        );
    }

    public static Puppy fromPuppyDTOToPuppy(PuppyDTO puppyDTO) {
        if (puppyDTO.birthDate() == null)
            return new Puppy(puppyDTO.breed(), puppyDTO.name(), LocalDateTime.now().truncatedTo(ChronoUnit.DAYS));

        return new Puppy(puppyDTO.breed(), puppyDTO.name(), puppyDTO.birthDate());
    }
}
