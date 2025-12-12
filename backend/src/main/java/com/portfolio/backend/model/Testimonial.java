package com.portfolio.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "testimonials")
public class Testimonial {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clientName;
    private String designation;
    private String company;
    private String profilePicture;

    @Column(length = 1000)
    private String review;

    private int rating; // 1-5

    public Testimonial() {}

    public Testimonial(String clientName, String designation, String company, String profilePicture, String review, int rating) {
        this.clientName = clientName;
        this.designation = designation;
        this.company = company;
        this.profilePicture = profilePicture;
        this.review = review;
        this.rating = rating;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }

    public String getDesignation() { return designation; }
    public void setDesignation(String designation) { this.designation = designation; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getProfilePicture() { return profilePicture; }
    public void setProfilePicture(String profilePicture) { this.profilePicture = profilePicture; }

    public String getReview() { return review; }
    public void setReview(String review) { this.review = review; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }
}
