package com.guanxiang.management.controller;

import com.guanxiang.management.dto.AiAnalysisRequest;
import com.guanxiang.management.dto.AiAnalysisResponse;
import com.guanxiang.management.service.AiAnalysisService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai/analysis")
public class AiController {

    private final AiAnalysisService aiAnalysisService;

    public AiController(AiAnalysisService aiAnalysisService) {
        this.aiAnalysisService = aiAnalysisService;
    }

    @GetMapping("/summary")
    public Map<String, Object> getSummary() {
        return aiAnalysisService.getSummary();
    }

    @PostMapping("/run")
    public AiAnalysisResponse runAnalysis(@RequestBody @Valid AiAnalysisRequest request) {
        return aiAnalysisService.run(request);
    }
}
