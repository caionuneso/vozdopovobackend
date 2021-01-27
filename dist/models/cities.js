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
var City_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const denunciation_1 = __importDefault(require("./denunciation"));
const states_1 = __importDefault(require("./states"));
let City = City_1 = class City {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], City.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], City.prototype, "state_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => states_1.default, cities => City_1),
    typeorm_1.JoinColumn({ name: 'state_id' }),
    __metadata("design:type", states_1.default)
], City.prototype, "state", void 0);
__decorate([
    typeorm_1.OneToMany(type => denunciation_1.default, city => City_1),
    __metadata("design:type", Array)
], City.prototype, "denunciations", void 0);
__decorate([
    typeorm_1.OneToMany(type => denunciation_1.default, city => City_1),
    __metadata("design:type", Array)
], City.prototype, "usersCreate", void 0);
City = City_1 = __decorate([
    typeorm_1.Entity('cities')
], City);
exports.default = City;
