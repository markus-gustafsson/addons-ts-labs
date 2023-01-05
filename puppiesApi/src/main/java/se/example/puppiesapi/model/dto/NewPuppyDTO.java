package se.example.puppiesapi.model.dto;

public record NewPuppyDTO(
        String name,
        String breed,
        String birthDate
) {
}
