package com.portfolio.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "certificates")
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String issuingOrganization;
    private LocalDate dateIssued;
    private String image;
    private String credentialUrl;

    @Column(length = 1000)
    private String description;

    public Certificate() {}

    public Certificate(String title, String issuingOrganization, LocalDate dateIssued, String image, String credentialUrl, String description) {
        this.title = title;
        this.issuingOrganization = issuingOrganization;
        this.dateIssued = dateIssued;
        this.image = image;
        this.credentialUrl = credentialUrl;
        this.description = description;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getIssuingOrganization() { return issuingOrganization; }
    public void setIssuingOrganization(String issuingOrganization) { this.issuingOrganization = issuingOrganization; }

    public LocalDate getDateIssued() { return dateIssued; }
    public void setDateIssued(LocalDate dateIssued) { this.dateIssued = dateIssued; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getCredentialUrl() { return credentialUrl; }
    public void setCredentialUrl(String credentialUrl) { this.credentialUrl = credentialUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
