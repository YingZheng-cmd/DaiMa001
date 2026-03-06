package com.guanxiang.management.service;

import com.guanxiang.management.dto.AiAnalysisRequest;
import com.guanxiang.management.dto.AiAnalysisResponse;
import com.guanxiang.management.entity.AiAnalysisLog;
import com.guanxiang.management.repository.AiAnalysisLogRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class AiAnalysisService {

    private final AiAnalysisLogRepository aiAnalysisLogRepository;

    public AiAnalysisService(AiAnalysisLogRepository aiAnalysisLogRepository) {
        this.aiAnalysisLogRepository = aiAnalysisLogRepository;
    }

    public Map<String, Object> getSummary() {
        Map<String, Object> summary = new HashMap<>();
        summary.put("analysisCount", aiAnalysisLogRepository.count());
        summary.put("lastRunAt", aiAnalysisLogRepository.findAll().stream()
                .map(AiAnalysisLog::getCreatedAt)
                .max(LocalDateTime::compareTo)
                .orElse(null));
        summary.put("hint", "此接口用于首页智能分析摘要展示");
        return summary;
    }

    public AiAnalysisResponse run(AiAnalysisRequest request) {
        LocalDateTime now = LocalDateTime.now();
        String analysis = "【预留AI结果】已接收分析指令：" + request.prompt()
                + "。后续可在此接入大模型服务并返回结构化分析结论。";

        AiAnalysisLog log = new AiAnalysisLog();
        log.setPrompt(request.prompt());
        log.setAnalysis(analysis);
        log.setModel("reserved-ai-model");
        log.setCreatedAt(now);
        aiAnalysisLogRepository.save(log);

        return new AiAnalysisResponse(request.prompt(), analysis, "reserved-ai-model", now);
    }
}
