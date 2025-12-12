package com.portfolio.backend.controllers;

import com.portfolio.backend.model.Experience;
import com.portfolio.backend.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ExperienceController {

    @Autowired
    ExperienceRepository experienceRepository;

    @GetMapping("/public/experiences")
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    @PostMapping("/experiences")
    public Experience createExperience(@RequestBody Experience experience) {
        return experienceRepository.save(experience);
    }

    @PutMapping("/experiences/{id}")
    public ResponseEntity<Experience> updateExperience(@PathVariable Long id, @RequestBody Experience experienceDetails) {
        return experienceRepository.findById(id)
                .map(experience -> {
                    experience.setJobTitle(experienceDetails.getJobTitle());
                    experience.setCompany(experienceDetails.getCompany());
                    experience.setDuration(experienceDetails.getDuration());
                    experience.setDescription(experienceDetails.getDescription());
                    experience.setCompanyLogo(experienceDetails.getCompanyLogo());
                    return ResponseEntity.ok(experienceRepository.save(experience));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/experiences/{id}")
    public ResponseEntity<?> deleteExperience(@PathVariable Long id) {
        return experienceRepository.findById(id)
                .map(experience -> {
                    experienceRepository.delete(experience);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
