"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createdb1611171361885 = void 0;
class createdb1611171361885 {
    constructor() {
        this.name = 'createdb1611171361885';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "denunciations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city_id" uuid NOT NULL, "images_url" text array NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_17d97aa553d9e7b5fca1c5e23b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "states" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "state_id" uuid NOT NULL, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usersCreate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "city_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9df0a36e5976001ccdf8789dc7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "denunciations" ADD CONSTRAINT "FK_4b15c957c15a0c8a04df442bafc" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cities" ADD CONSTRAINT "FK_1229b56aa12cae674b824fccd13" FOREIGN KEY ("state_id") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usersCreate" ADD CONSTRAINT "FK_d55933b90bab73aa1c978242f27" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "usersCreate" DROP CONSTRAINT "FK_d55933b90bab73aa1c978242f27"`);
        await queryRunner.query(`ALTER TABLE "cities" DROP CONSTRAINT "FK_1229b56aa12cae674b824fccd13"`);
        await queryRunner.query(`ALTER TABLE "denunciations" DROP CONSTRAINT "FK_4b15c957c15a0c8a04df442bafc"`);
        await queryRunner.query(`DROP TABLE "usersCreate"`);
        await queryRunner.query(`DROP TABLE "cities"`);
        await queryRunner.query(`DROP TABLE "states"`);
        await queryRunner.query(`DROP TABLE "denunciations"`);
    }
}
exports.createdb1611171361885 = createdb1611171361885;
