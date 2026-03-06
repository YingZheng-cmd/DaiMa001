package com.guanxiang.management.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "process_processing_record")
public class ProcessProcessingRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String processingCode;
    private String rawBatch;
    private String processingTech;
    private Double outputQuantity;
    private String manager;

    public Long getId() { return id; }
    public String getProcessingCode() { return processingCode; }
    public void setProcessingCode(String processingCode) { this.processingCode = processingCode; }
    public String getRawBatch() { return rawBatch; }
    public void setRawBatch(String rawBatch) { this.rawBatch = rawBatch; }
    public String getProcessingTech() { return processingTech; }
    public void setProcessingTech(String processingTech) { this.processingTech = processingTech; }
    public Double getOutputQuantity() { return outputQuantity; }
    public void setOutputQuantity(Double outputQuantity) { this.outputQuantity = outputQuantity; }
    public String getManager() { return manager; }
    public void setManager(String manager) { this.manager = manager; }
}
