package com.guanxiang.management.controller;

import com.guanxiang.management.entity.SystemUser;
import com.guanxiang.management.service.ManagementQueryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/system")
public class SystemController {

    private final ManagementQueryService managementQueryService;

    public SystemController(ManagementQueryService managementQueryService) {
        this.managementQueryService = managementQueryService;
    }

    @GetMapping("/user/list")
    public List<SystemUser> getUserList() { return managementQueryService.getUsers(); }
}
