package com.portfolio.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "education")
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String institutionName;
    private String degree;
    private String timePeriod;

    @Column(length = 1000)
    private String description;

    private String institutionLogo;

    public Education() {}

    public Education(String institutionName, String degree, String timePeriod, String description, String institutionLogo) {
        this.institutionName = institutionName;
        this.degree = degree;
        this.timePeriod = timePeriod;
        this.description = description;
        this.institutionLogo = institutionLogo;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getInstitutionName() { return institutionName; }
    public void setInstitutionName(String institutionName) { this.institutionName = institutionName; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getTimePeriod() { return timePeriod; }
    public void setTimePeriod(String timePeriod) { this.timePeriod = timePeriod; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getInstitutionLogo() { return institutionLogo; }
    public void setInstitutionLogo(String institutionLogo) { this.institutionLogo = institutionLogo; }
}
