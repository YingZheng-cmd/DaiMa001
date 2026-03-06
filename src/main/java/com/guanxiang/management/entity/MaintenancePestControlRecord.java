package com.guanxiang.management.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "maintenance_pest_control_record")
public class MaintenancePestControlRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String recordCode;
    private String pestType;
    private String solution;
    private String operator;
    private String effectEvaluation;

    public Long getId() { return id; }
    public String getRecordCode() { return recordCode; }
    public void setRecordCode(String recordCode) { this.recordCode = recordCode; }
    public String getPestType() { return pestType; }
    public void setPestType(String pestType) { this.pestType = pestType; }
    public String getSolution() { return solution; }
    public void setSolution(String solution) { this.solution = solution; }
    public String getOperator() { return operator; }
    public void setOperator(String operator) { this.operator = operator; }
    public String getEffectEvaluation() { return effectEvaluation; }
    public void setEffectEvaluation(String effectEvaluation) { this.effectEvaluation = effectEvaluation; }
}
