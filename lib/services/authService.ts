import { IResponse } from "../model/api";
import { LoginRequest, LoginResponse, SignUpRequest, SignUpResponse } from "../model/login";
import BaseApiService from "./baseApiService";
import storage from "./storage";

class AuthService extends BaseApiService {
  async login(req: LoginRequest): Promise<boolean> {
    const res = await this.post<IResponse<LoginResponse>, LoginRequest>('login', undefined, {
      auth: {
        username: req.email,
        password: req.password
      }
    });
    if (!!res?.data) {
      storage.setUserInfo(res.data);
      return true;
    } else {
      return false;
    }
  }

  async signUp(req: SignUpRequest): Promise<boolean> {
    const res = await this.post<IResponse<SignUpResponse>, SignUpRequest>('api/sign-up', req).then(this.showMessage(true));
    if (!!res?.data) {
      return true;
    } else {
      return false;
    }
  }
}

const authService = new AuthService();

export default authService;