//// why do i change the json to object?
// what's the advantage of using object instead of json?
// i can use the data in the code, and i can't use the json data in the code
// so i change the json to object, and export the object, then i can import the object in the code
// and one more thing we can easily manipulate them in the code and we can't do that with json
// if we do change in the json we have to parse the json and then we can use it in the code that might push into the performance issue that's why i've used to object instead of json

const data = {
  blocks: [
    {
      id: "block_1",
      type: "block",
      position: { top: 100, left: 200 },
      size: { height: 200, width: 300 },
      children: [
        {
          id: "text_1",
          type: "text",
          content: "This is a text label",
          position: { top: 50, left: 50 },
        },
        {
          id: "image_1",
          type: "image",
          src: "path_to_image.jpg",
          position: { top: 120, left: 100 },
        },
      ],
    },
    {
      id: "block_2",
      type: "block",
      position: { top: 350, left: 500 },
      size: { height: 250, width: 350 },
      children: [
        {
          id: "text_2",
          type: "text",
          content: "Another text label",
          position: { top: 80, left: 50 },
        },
        {
          id: "image_2",
          type: "image",
          src: "path_to_image2.jpg",
          position: { top: 160, left: 100 },
        },
      ],
    },
  ],
};

export default data;
