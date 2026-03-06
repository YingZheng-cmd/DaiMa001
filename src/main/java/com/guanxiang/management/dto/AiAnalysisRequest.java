package com.guanxiang.management.dto;

import jakarta.validation.constraints.NotBlank;

public record AiAnalysisRequest(@NotBlank(message = "prompt 不能为空") String prompt) {
}
