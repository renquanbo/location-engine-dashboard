import { LoginResponse } from "../model/login";

type UserInfo = LoginResponse;

class Storage {
  private key: string = "bcdled"

  setUserInfo(info: UserInfo): void {
    localStorage.setItem(this.key, JSON.stringify(info));
  }

  get userInfo(): UserInfo | null {
    const item = localStorage.getItem(this.key);
    if (typeof item === 'string') {
      return JSON.parse(item);
    }
    return null;
  }

  get token(): string | undefined{
    return this.userInfo?.token
  }
}

const storage = new Storage();
export default storage;