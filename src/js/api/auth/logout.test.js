//This file both checks the logout function and if it can remove tokens from localstorage

import { logout } from "./logout";

const ex_access_token = "access";
const ex_profile = {
  name: "Tester",
  email: "tester@noroff.no",
  banner: null,
  avatar: "https://picsum.photos/id/2/367/267",
};

/**
 * Setting up a localstorage mock - borrowed from Olivers repo - workflow
 * This is to simulate a local storage in the tests
 */
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

/**
 * A mock function that removes the token from localstorage and logs the user out
 */
describe("logout", () => {
  it("Returns a valid token and response object", () => {
    localStorage.setItem("profile", JSON.stringify(ex_profile));
    localStorage.setItem("token", JSON.stringify(ex_access_token));
    logout();
    expect(localStorage.getItem("profile")).toEqual(null);
    expect(localStorage.getItem("token")).toEqual(null);
  });
});
