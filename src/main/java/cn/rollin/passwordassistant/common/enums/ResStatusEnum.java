package cn.rollin.passwordassistant.common.enums;

import lombok.Getter;

/**
 * 响应码 - 枚举
 *
 * @author rollin
 * @since 2024-12-27 23:56:52
 */
@Getter
public enum ResStatusEnum {

    /**
     * 通用 - 请求成功共用
     */
    SUCCESS("SUC0000", "Request Success."),

    /**
     * 通用 - 请求失败共用
     */
    FAILURE("ERM0000", "Request failed, Try again later.");


    /**
     * 响应码：前两位表示微服务(例如：01，表示用户微服务)，后四位表示错误码
     */
    private final String code;

    private final String message;

    ResStatusEnum(String code, String message) {
        this.code = code;
        this.message = message;
    }

}
