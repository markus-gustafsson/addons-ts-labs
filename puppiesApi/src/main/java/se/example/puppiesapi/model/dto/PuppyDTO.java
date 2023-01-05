package se.example.puppiesapi.model.dto;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

public record PuppyDTO(
        Long id,
        String breed,
        String name,
        LocalDateTime birthDate
) {
}
