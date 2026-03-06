package com.guanxiang.management.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "planting_tree")
public class PlantingTree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String treeCode;
    private String treeName;
    private Integer treeAge;
    private String healthStatus;
    private LocalDate registerDate;

    public Long getId() { return id; }
    public String getTreeCode() { return treeCode; }
    public void setTreeCode(String treeCode) { this.treeCode = treeCode; }
    public String getTreeName() { return treeName; }
    public void setTreeName(String treeName) { this.treeName = treeName; }
    public Integer getTreeAge() { return treeAge; }
    public void setTreeAge(Integer treeAge) { this.treeAge = treeAge; }
    public String getHealthStatus() { return healthStatus; }
    public void setHealthStatus(String healthStatus) { this.healthStatus = healthStatus; }
    public LocalDate getRegisterDate() { return registerDate; }
    public void setRegisterDate(LocalDate registerDate) { this.registerDate = registerDate; }
}
