"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../lib/env/env");
const axios_1 = __importDefault(require("axios"));
const baseURL = process.env.EXCHANGE_API_URL;
const apiKey = process.env.EXCHANGE_API_KEY;
const api = axios_1.default.create({
    baseURL: `${baseURL}${apiKey}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});
exports.default = api;
