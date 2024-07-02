const fadeDurate = 350;

const supress = {
  elements: ["elementsX"],
  //...
};
//Supress object stores/sets the id of elements so both the supressor and elements get/sets the id from here (one place). The supressor modifies their indexes as needed. The key is the name of the page where element displays, the value is/are the element(s) indexes.
export { fadeDurate, supress };
