import React from "react";
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";

const TableList = ({ posts, title }) => {
  return (
    <>
      <h5 className="text-center">{title}</h5>
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {posts.map((post, index) => (
            <TableItem number={index + 1} post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
