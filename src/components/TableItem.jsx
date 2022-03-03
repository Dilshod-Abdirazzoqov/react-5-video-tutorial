import React from "react";
import MyButton from ".././components/UI/button/MyButton";

const TableItem = (props) => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.post.title}</td>
      <td>{props.post.stack}</td>
      <td>
        <MyButton className={props.post.styleBtn}>Delete</MyButton>
      </td>
    </tr>
  );
};

export default TableItem;
