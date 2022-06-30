import express from "express";
import Container from "typedi";
import { IConnectController } from "../waitingRoom/waitingRoom.interface";
import ConnectController from "../waitingRoom/waitingRoom.controller";

const router = express.Router();
const connectController: IConnectController = Container.get(ConnectController);

router.get("/connect", connectController.connect);

export default router;
