import { Service } from "typedi";
import { IConnectService } from "./connect.interface";
import ConnectRepository from "./connect.repository";

@Service()
class ConnectService implements IConnectService {
  constructor(private connectRepository: ConnectRepository) {}

  find = async ({ test }: { test: string }): Promise<any> => {
    try {
      const result = await this.connectRepository.find({ test });
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default ConnectService;
