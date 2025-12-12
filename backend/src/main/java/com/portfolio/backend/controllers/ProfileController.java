package com.portfolio.backend.controllers;

import com.portfolio.backend.model.Profile;
import com.portfolio.backend.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProfileController {

    @Autowired
    ProfileRepository profileRepository;

    @GetMapping("/public/profile")
    public ResponseEntity<Profile> getProfile() {
        return profileRepository.findAll().stream().findFirst()
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/profile")
    public ResponseEntity<Profile> createOrUpdateProfile(@RequestBody Profile profile) {
        // Assume single profile for now
        Profile existing = profileRepository.findAll().stream().findFirst().orElse(null);
        if (existing != null) {
            profile.setId(existing.getId());
        }
        return ResponseEntity.ok(profileRepository.save(profile));
    }
}
