package com.guanxiang.management.dto;

import java.time.LocalDateTime;

public record AiAnalysisResponse(String prompt,
                                 String analysis,
                                 String model,
                                 LocalDateTime createdAt) {
}
