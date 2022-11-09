import { login } from "./login";

const ex_email = "tester@noroff.no";
const ex_password = "Mypassword";
const test_response = {
  name: "Tester",
  email: "tester@noroff.no",
  banner: null,
  avatar: "https://picsum.photos/id/2/367/267",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5c....",
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
 * Function that mocks a fetch function that fetches successfully
 * @returns {Promise<object>} A promise that resolves to the test item
 */

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(test_response),
  });
}

/**
 * A mock fetch function that fetches unsuccessfully
 */

describe("login", () => {
  it("Returns a valid access token in local storage and valid response object", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    //login removes the accessToken from test object
    const expectedToken = test_response.accessToken;
    const response = await login(ex_email, ex_password);
    const storedToken = JSON.parse(localStorage.getItem("token"));
    expect(storedToken).toEqual(expectedToken);
    expect(response).toEqual(test_response);
  });
});
