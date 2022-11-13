import { createPost } from "./create";

const createTestPost = {
  title: "Hello",
  body: "Test",
  media: "https://picsum.photos/id/27/367/267",
  tags: ["test", "jest"],
};

const { title, body, media, tags } = createTestPost;

const testPostData = {
  title: title,
  body: body,
  media: media,
  tags: tags,
};

/**
 * A mock function to create a post
 * @returns A promise that resolves to the create test
 */

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "success",
    json: () => Promise.resolve(createTestPost),
  });
}

describe("createPost", () => {
  it("Creates a new item on the API", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const test = await createPost(testPostData);
    expect(test).toEqual(createTestPost);
  });
});
