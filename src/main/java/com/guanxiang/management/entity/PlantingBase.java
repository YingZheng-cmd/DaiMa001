package com.guanxiang.management.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "planting_base")
public class PlantingBase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String baseCode;
    private String baseName;
    private String region;
    private Double areaMu;
    private String manager;

    public Long getId() { return id; }
    public String getBaseCode() { return baseCode; }
    public void setBaseCode(String baseCode) { this.baseCode = baseCode; }
    public String getBaseName() { return baseName; }
    public void setBaseName(String baseName) { this.baseName = baseName; }
    public String getRegion() { return region; }
    public void setRegion(String region) { this.region = region; }
    public Double getAreaMu() { return areaMu; }
    public void setAreaMu(Double areaMu) { this.areaMu = areaMu; }
    public String getManager() { return manager; }
    public void setManager(String manager) { this.manager = manager; }
}
