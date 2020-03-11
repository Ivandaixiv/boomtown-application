import React from "react";
import ItemsGrid from "../../components/ItemsGrid";
import PropTypes from "prop-types";

const Items = ({ items }) => {
  console.log(items);
  return (
    <div>
      <ItemsGrid items={items} />
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      imageurl: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.object),
      itemowner: PropTypes.object,
      borrower: PropTypes.object
    })
  )
};

export default Items;
