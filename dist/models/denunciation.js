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
var Denunciation_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cities_1 = __importDefault(require("./cities"));
let Denunciation = Denunciation_1 = class Denunciation {
    constructor() {
        this.images_url = [];
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Denunciation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Denunciation.prototype, "city_id", void 0);
__decorate([
    typeorm_1.Column({ array: true, type: 'text' }),
    __metadata("design:type", Array)
], Denunciation.prototype, "images_url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Denunciation.prototype, "description", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Denunciation.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Denunciation.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cities_1.default, denunciations => Denunciation_1),
    typeorm_1.JoinColumn({ name: 'city_id' }),
    __metadata("design:type", cities_1.default)
], Denunciation.prototype, "city", void 0);
Denunciation = Denunciation_1 = __decorate([
    typeorm_1.Entity('denunciations')
], Denunciation);
exports.default = Denunciation;
