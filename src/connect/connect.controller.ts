import { Service } from "typedi";
import { Request, Response, NextFunction } from "express";
import ConnectService from "./connect.service";
import { IConnectController } from "./connect.interface";

@Service()
class ConnectController implements IConnectController {
  constructor(private connectService: ConnectService) {}

  connect = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const { test } = req.body;
      const result = await this.connectService.find({ test });
      res.status(200).json({ result });
    } catch (error) {
      next(error);
    }
  };
}

export default ConnectController;
