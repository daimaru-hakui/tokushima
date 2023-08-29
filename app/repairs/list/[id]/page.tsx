import React from "react";

const RepairListById = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default RepairListById;
