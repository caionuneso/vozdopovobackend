"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const tempFolder = path_1.default.resolve(__dirname, '..', '..', 'tmp');
exports.default = {
    directory: tempFolder,
    /* storage: multer.diskStorage({
      destination: tempFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const filename = `${fileHash}-${file.originalname}`;
  
        return callback(null, filename);
      },
    }), */
    storage: multer_s3_1.default({
        s3: new aws_sdk_1.default.S3(),
        bucket: 'denunciations-images',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (request, file, callback) => {
            const fileHash = crypto_1.default.randomBytes(10).toString('hex');
            const filename = `${fileHash}-${file.originalname}`;
            return callback(null, filename);
        },
    }),
};
