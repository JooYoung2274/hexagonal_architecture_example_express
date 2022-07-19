import { Request, Response, NextFunction } from "express";
import { IConnectController, IConnectService } from "./connect.interface";

class ConnectController implements IConnectController {
  constructor(private connectService: IConnectService) {}

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
