import { ApiError } from "./ApiError";
import { ErrorCode } from "./ErrorCode";

export class NotFoundError extends ApiError {
    public static STATUS_CODE = 404;
    constructor(message: string, metadata: Record<string, unknown> = {}, errorCode = ErrorCode.NotFound) {
        super(message, metadata, NotFoundError.STATUS_CODE, errorCode);
        this.name = "NotFoundError";
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
