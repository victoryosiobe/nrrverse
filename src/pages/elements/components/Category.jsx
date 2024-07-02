const Category = ({ label, style }) => {
  const bg = style ? style : "bg-white text-gray-800 dark:bg-gray-900";
  return (
    <div
      className={`p-3
rounded-lg text-nowrap capitalize ring-2 ring-blue-500/[.45] ring-inset ${bg} dark:text-white hover:bg-blue-500 hover:text-white`}
    >
      {label}
    </div>
  );
};

export default Category;
