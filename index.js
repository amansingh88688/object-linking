const objects = [
  {
    id: "1",
    email: "example1@example.com",
    password: "password1",
    link_id: ["2", "3"]
  },
  {
    id: "2",
    email: "example2@example.com",
    password: "password2",
    link_id: ["1", "4"]
  },
  {
    id: "3",
    email: "example3@example.com",
    password: "password3",
    link_id: ["1", "5"]
  },
  {
    id: "4",
    email: "example4@example.com",
    password: "password4",
    link_id: ["2"]
  },
  {
    id: "5",
    email: "example5@example.com",
    password: "password5",
    link_id: ["3"]
  }
];

// Link the objects based on link IDs

objects.forEach(obj => {
  obj.linkedObjects = objects.filter(ob => obj.link_id.includes(ob.id));
});

console.log(objects);
