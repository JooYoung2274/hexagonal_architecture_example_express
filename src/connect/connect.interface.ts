import { Request, Response, NextFunction } from "express";

export interface IConnectService {
  find: ({ test }: { test: string }) => Promise<any>;
}

export interface IConnectRepository {
  find: ({ test }: { test: string }) => Promise<any>;
}

export interface IConnectController {
  connect: (req: Request, res: Response, next: NextFunction) => Promise<any>;
}
