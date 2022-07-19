import { IConnectService, IConnectRepository } from "./connect.interface";

class ConnectService implements IConnectService {
  constructor(private connectRepository: IConnectRepository) {}

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
