package se.example.puppiesapi.model.dto;

import java.time.LocalDateTime;

public record PuppyDTO(
        Long id,
        String breed,
        String name,
        LocalDateTime birthDate
) {
}
