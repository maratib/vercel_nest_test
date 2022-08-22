"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = exports.MESSAGES = exports.REGEX = exports.PostDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
class PostDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PostDto.prototype, "name", void 0);
exports.PostDto = PostDto;
const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper case, lowercase letter along with a number and special character.';
const VALIDATION_PIPE = new common_1.ValidationPipe({
    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
});
exports.REGEX = {
    PASSWORD_RULE,
};
exports.MESSAGES = {
    PASSWORD_RULE_MESSAGE,
};
exports.SETTINGS = {
    VALIDATION_PIPE,
};
//# sourceMappingURL=dto.js.map