import { Service } from "typedi";
import TodayCounter from "../models/count";
import { IConnectRepository } from "./connect.interface";

@Service()
class ConnectRepository implements IConnectRepository {
  find = async ({ test }: { test: string }): Promise<any> => {
    await TodayCounter.find({ name: test });
    return;
  };
}

export default ConnectRepository;
