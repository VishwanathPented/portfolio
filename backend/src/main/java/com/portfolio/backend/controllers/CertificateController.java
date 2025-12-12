package com.portfolio.backend.controllers;

import com.portfolio.backend.model.Certificate;
import com.portfolio.backend.repository.CertificateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class CertificateController {

    @Autowired
    CertificateRepository certificateRepository;

    @GetMapping("/public/certificates")
    public List<Certificate> getAllCertificates() {
        return certificateRepository.findAll();
    }

    @PostMapping("/certificates")
    public Certificate createCertificate(@RequestBody Certificate certificate) {
        return certificateRepository.save(certificate);
    }

    @PutMapping("/certificates/{id}")
    public ResponseEntity<Certificate> updateCertificate(@PathVariable Long id, @RequestBody Certificate certificateDetails) {
        return certificateRepository.findById(id)
                .map(certificate -> {
                    certificate.setTitle(certificateDetails.getTitle());
                    certificate.setIssuingOrganization(certificateDetails.getIssuingOrganization());
                    certificate.setDateIssued(certificateDetails.getDateIssued());
                   if (certificateDetails.getImage() != null) certificate.setImage(certificateDetails.getImage());
            if (certificateDetails.getCredentialUrl() != null) certificate.setCredentialUrl(certificateDetails.getCredentialUrl());
                    certificate.setDescription(certificateDetails.getDescription());
                    return ResponseEntity.ok(certificateRepository.save(certificate));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/certificates/{id}")
    public ResponseEntity<?> deleteCertificate(@PathVariable Long id) {
        return certificateRepository.findById(id)
                .map(certificate -> {
                    certificateRepository.delete(certificate);
                    return ResponseEntity.ok().build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
