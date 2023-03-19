import React from "react";

export default function Contact() {
  const data = [
    {
      name: "zalupa1",
    },
    {
      name: "zalupa2",
    },
    {
      name: "zalupa3",
    },
    {
      name: "zalupa4",
    },
    {
      name: "zalupa4",
    },
    {
      name: "zalupa4",
    },
  ];

  const unique = [...new Set(data.map((item) => item.name))]; // [ 'A', 'B']

  console.log(unique);
  return <div style={{ background: "violet" }}>Contact</div>;
}
