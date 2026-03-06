package com.guanxiang.management.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "process_harvest_record")
public class ProcessHarvestRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String harvestCode;
    private String baseName;
    private LocalDate harvestDate;
    private Double weightKg;
    private String qcStatus;

    public Long getId() { return id; }
    public String getHarvestCode() { return harvestCode; }
    public void setHarvestCode(String harvestCode) { this.harvestCode = harvestCode; }
    public String getBaseName() { return baseName; }
    public void setBaseName(String baseName) { this.baseName = baseName; }
    public LocalDate getHarvestDate() { return harvestDate; }
    public void setHarvestDate(LocalDate harvestDate) { this.harvestDate = harvestDate; }
    public Double getWeightKg() { return weightKg; }
    public void setWeightKg(Double weightKg) { this.weightKg = weightKg; }
    public String getQcStatus() { return qcStatus; }
    public void setQcStatus(String qcStatus) { this.qcStatus = qcStatus; }
}
