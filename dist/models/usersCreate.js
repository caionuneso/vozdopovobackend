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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var UserCreate_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cities_1 = __importDefault(require("./cities"));
let UserCreate = UserCreate_1 = class UserCreate {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], UserCreate.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], UserCreate.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], UserCreate.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserCreate.prototype, "city_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cities_1.default, usersCreate => UserCreate_1),
    typeorm_1.JoinColumn({ name: 'city_id' }),
    __metadata("design:type", cities_1.default)
], UserCreate.prototype, "city", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserCreate.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], UserCreate.prototype, "updated_at", void 0);
UserCreate = UserCreate_1 = __decorate([
    typeorm_1.Entity('usersCreate')
], UserCreate);
exports.default = UserCreate;
