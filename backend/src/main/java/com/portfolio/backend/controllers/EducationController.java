package com.portfolio.backend.controllers;

import com.portfolio.backend.model.Education;
import com.portfolio.backend.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EducationController {

    @Autowired
    EducationRepository educationRepository;

    @GetMapping("/public/educations")
    public List<Education> getAllEducations() {
        return educationRepository.findAll();
    }

    @PostMapping("/educations")
    public Education createEducation(@RequestBody Education education) {
        return educationRepository.save(education);
    }

    @PutMapping("/educations/{id}")
    public ResponseEntity<Education> updateEducation(@PathVariable Long id, @RequestBody Education educationDetails) {
        return educationRepository.findById(id)
                .map(education -> {
                    education.setInstitutionName(educationDetails.getInstitutionName());
                    education.setDegree(educationDetails.getDegree());
                    education.setTimePeriod(educationDetails.getTimePeriod());
                    education.setDescription(educationDetails.getDescription());
                    education.setInstitutionLogo(educationDetails.getInstitutionLogo());
                    return ResponseEntity.ok(educationRepository.save(education));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/educations/{id}")
    public ResponseEntity<?> deleteEducation(@PathVariable Long id) {
        return educationRepository.findById(id)
                .map(education -> {
                    educationRepository.delete(education);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
