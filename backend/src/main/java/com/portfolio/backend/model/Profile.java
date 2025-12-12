package com.portfolio.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String tagline;
    private String title;

    @Column(length = 1000)
    private String bio;

    private String profileImage;
    private String resumeUrl;

    // Contact Info
    private String email;
    private String phone;
    private String address;

    // Social Links (JSON or comma separated for simplicity, or just fields)
    // Keep it simple for now, maybe add specific fields if needed or a map?
    // Based on previous edit, it was using default lombok. Assuming standard fields.

    public Profile() {}

    public Profile(String fullName, String tagline, String title, String bio, String profileImage, String resumeUrl, String email, String phone, String address) {
        this.fullName = fullName;
        this.tagline = tagline;
        this.title = title;
        this.bio = bio;
        this.profileImage = profileImage;
        this.resumeUrl = resumeUrl;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getProfileImage() { return profileImage; }
    public void setProfileImage(String profileImage) { this.profileImage = profileImage; }

    public String getResumeUrl() { return resumeUrl; }
    public void setResumeUrl(String resumeUrl) { this.resumeUrl = resumeUrl; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
}
