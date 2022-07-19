import express from "express";
import Container from "typedi";
import { IConnectController } from "../connect/connect.interface";
import ConnectController from "../connect/connect.controller";
import ConnectService from "../connect/connect.service";
import ConnectRepository from "../connect/connect.repository";

const router = express.Router();

const connectRepository = new ConnectRepository();
const connectService = new ConnectService(connectRepository);
const connectController = new ConnectController(connectService);

router.get("/connect", connectController.connect);

export default router;
