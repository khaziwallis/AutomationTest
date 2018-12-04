/**
 * @namespace TestFrameWork
 */
module.exports = {
  testSuites() {
    return [
      {
        url: "http://localhost:9000",
        expectedTests: [
          {
            testHook: "title-label",
            message: "should have expected title label",
            expected: "Title"
          },
          {
            testHook: "title-value",
            message: "should have expected title",
            expected: "Test Title"
          },
          {
            testHook: "description-label",
            message: "should have expected description label",
            expected: "Description"
          },
          {
            testHook: "description-value",
            message: "should have expected description",
            expected: "test description"
          }
        ]
      }
    ];
  }
};
