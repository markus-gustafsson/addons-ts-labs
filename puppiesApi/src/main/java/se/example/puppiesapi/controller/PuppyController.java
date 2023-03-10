package se.example.puppiesapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.example.puppiesapi.model.dto.NewPuppyDTO;
import se.example.puppiesapi.model.dto.PuppyDTO;
import se.example.puppiesapi.service.PuppyService;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

import static org.springframework.http.HttpStatus.*;
import static org.springframework.http.MediaType.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "/api/puppies")
public class PuppyController {
    private PuppyService puppyService;

    @Autowired
    public PuppyController(PuppyService puppyService) {
        this.puppyService = puppyService;
    }

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<PuppyDTO>> getAll() {
        List<PuppyDTO> puppyDTOS = puppyService.findAll();
        return ResponseEntity.ok(puppyDTOS);
    }

    @GetMapping(path = "/{id}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PuppyDTO> getById(@PathVariable Long id) {
        try {
            PuppyDTO puppyDTO = puppyService.findById(id);
            return ResponseEntity.ok(puppyDTO);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping(produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PuppyDTO> createNew(@RequestBody NewPuppyDTO newPuppyDTO) {
        PuppyDTO savedPuppyDTO = puppyService.createNew(newPuppyDTO);
        URI location = URI.create("/api/puppies/" + savedPuppyDTO.id());
        return ResponseEntity.created(location).body(savedPuppyDTO);
    }

    @PutMapping(path = "/{id}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PuppyDTO> update(@PathVariable Long id, @RequestBody NewPuppyDTO newPuppyDTO) {
        try {
            PuppyDTO updatedPuppyDTO = puppyService.update(id, newPuppyDTO);
            return ResponseEntity.accepted().body(updatedPuppyDTO);
        } catch (NoSuchElementException e) {
            throw new ResponseStatusException(NOT_FOUND, e.getMessage());
        }
    }

    @DeleteMapping(path = "/{id}", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        puppyService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
