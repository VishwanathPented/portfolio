package com.portfolio.backend.controllers;

import com.portfolio.backend.model.Testimonial;
import com.portfolio.backend.repository.TestimonialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TestimonialController {

    @Autowired
    TestimonialRepository testimonialRepository;

    @GetMapping("/public/testimonials")
    public List<Testimonial> getAllTestimonials() {
        return testimonialRepository.findAll();
    }

    @PostMapping("/testimonials")
    public Testimonial createTestimonial(@RequestBody Testimonial testimonial) {
        return testimonialRepository.save(testimonial);
    }

    @PutMapping("/testimonials/{id}")
    public ResponseEntity<Testimonial> updateTestimonial(@PathVariable Long id, @RequestBody Testimonial testimonialDetails) {
        return testimonialRepository.findById(id)
                .map(testimonial -> {
                    testimonial.setClientName(testimonialDetails.getClientName());
                    testimonial.setDesignation(testimonialDetails.getDesignation());
                    testimonial.setCompany(testimonialDetails.getCompany());
                    testimonial.setProfilePicture(testimonialDetails.getProfilePicture());
                   if (testimonialDetails.getReview() != null) testimonial.setReview(testimonialDetails.getReview());
                    testimonial.setRating(testimonialDetails.getRating());
                    return ResponseEntity.ok(testimonialRepository.save(testimonial));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/testimonials/{id}")
    public ResponseEntity<?> deleteTestimonial(@PathVariable Long id) {
        return testimonialRepository.findById(id)
                .map(testimonial -> {
                    testimonialRepository.delete(testimonial);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
