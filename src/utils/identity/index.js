import config from "config";
import Storage from "utils/storage";

export default class UserIDentity {
  session = {};

  constructor(user) {
    this.session = user;
  }

  static loadFromLocal() {
    const _session = Storage.get(config.userSessionKey);
    return new UserIDentity(_session);
  }

  setSession(session) {
    this.session = session;
    Storage.set(config.userSessionKey, this.session);
    return this;
  }

  getSession() {
    return this.session;
  }

  setApiSession = session => {
    this.session.apiSession = session;
    return this;
  };

  deleteSession() {
    this.session = {};
    Storage.remove(config.userSessionKey);
  }
}
