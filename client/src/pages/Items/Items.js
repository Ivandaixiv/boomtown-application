import React from "react";
import ItemsGrid from "../../components/ItemsGrid";

const Items = ({ items }) => {
  return (
    <div>
      <ItemsGrid items={items} />
    </div>
  );
};

export default Items;
