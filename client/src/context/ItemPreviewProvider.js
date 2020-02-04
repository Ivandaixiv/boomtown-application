import React from "react";

export const ItemPreviewContext = React.createContext();

const intialState = {
  imageurl: "http://via.placeholder.com/1920x1080?text=Please select an image",
  itemowner: {},
  created: new Date(),
  title: "Dummy Title",
  description: "Dummy Description",
  Tag: []
};

const ItemPreviewProvider = props => {
  const [item, setItem] = React.useState({ item: intialState });

  const updatePreview = itemInput => {
    const newItem = { ...item, ...itemInput };
    setItem(newItem);
  };

  const resetPreview = () => {
    setItem(intialState);
  };

  return (
    <ItemPreviewContext.Provider
      value={{
        state: item,
        updatePreview: updatePreview,
        resetPreview: resetPreview
      }}
    >
      {props.children}
    </ItemPreviewContext.Provider>
  );
};

export default ItemPreviewProvider;
