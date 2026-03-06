package com.guanxiang.management.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "planting_batch")
public class PlantingBatch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String batchCode;
    private String baseName;
    private LocalDate plantDate;
    private Integer quantity;
    private String status;

    public Long getId() { return id; }
    public String getBatchCode() { return batchCode; }
    public void setBatchCode(String batchCode) { this.batchCode = batchCode; }
    public String getBaseName() { return baseName; }
    public void setBaseName(String baseName) { this.baseName = baseName; }
    public LocalDate getPlantDate() { return plantDate; }
    public void setPlantDate(LocalDate plantDate) { this.plantDate = plantDate; }
    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
