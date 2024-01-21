import { ApiError } from "./ApiError";
import { ErrorCode } from "./ErrorCode";

export class UnauthorizedError extends ApiError {
    public static STATUS_CODE = 401;
    constructor(message: string, metadata: Record<string, unknown> = {}, errorCode = ErrorCode.Unauthorized) {
        super(message, metadata, UnauthorizedError.STATUS_CODE, errorCode);
        this.name = "UnauthorizedError";
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
