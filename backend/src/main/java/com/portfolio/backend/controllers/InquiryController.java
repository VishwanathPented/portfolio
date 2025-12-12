package com.portfolio.backend.controllers;

import com.portfolio.backend.model.Inquiry;
import com.portfolio.backend.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class InquiryController {

    @Autowired
    InquiryRepository inquiryRepository;

    // Admin only
    @GetMapping("/inquiries")
    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAll();
    }

    // Public endpoint for submitting contact form
    @PostMapping("/public/inquiries")
    public Inquiry createInquiry(@RequestBody Inquiry inquiry) {
        // Here you would also trigger an email service
        return inquiryRepository.save(inquiry);
    }

    // Admin only
    @PatchMapping("/inquiries/{id}/read")
    public ResponseEntity<Inquiry> markAsRead(@PathVariable Long id) {
        return inquiryRepository.findById(id)
                .map(inquiry -> {
                    inquiry.setRead(true);
                    return ResponseEntity.ok(inquiryRepository.save(inquiry));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/inquiries/{id}")
    public ResponseEntity<?> deleteInquiry(@PathVariable Long id) {
        return inquiryRepository.findById(id)
                .map(inquiry -> {
                    inquiryRepository.delete(inquiry);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
