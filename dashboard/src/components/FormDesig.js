import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import user from "./img/user.jpeg"
import mongo from "./img/mongo.png"
import node from "./img/node.png"
import react from "./img/react.png"
import "./Formdes.css";

const PictureList = [
  {
    id: 1,
    url:user,
  },
  {
    id: 2,
    url:react,
  },
  {
    id: 3,
    url:node,
  },
  {
    id: 4,
    url:mongo,
  },
];

function DragDrop() {
  const [board, setBoard] = useState(['']);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;