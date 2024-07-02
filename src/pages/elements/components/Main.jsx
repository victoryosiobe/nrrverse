import Search from "../../../components/Search";
import Category from "./Category";
import { supress } from "../../../../public/variables";
const supressIds = supress.elements;
const category = [
  "all",
  "hero",
  "nav bar",
  "side bar",
  "footer",
  "icon",
  "buttons",
  "modal",
  "animation",
  "layout",
  "images",
  "containers",
  "patterns",
];
function catList() {
  return category.map((v, i) => (
    <Category label={v} style={i === 0 ? "bg-blue-500 text-white" : ""} />
  ));
}
function Main() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-800 relative z-[2]"
      id={supressIds.toString()}
    >
      <div className="p-5 pb-0 sticky top-0">
        <div className="max-w-screen-md mx-auto">
          <Search placeholder="Author|Type|Component..." />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto overflow-x-auto grid grid-flow-col-dense justify-items-center gap-5 no-scrollbar my-5 px-5">
        {catList()}
      </div>
      <div className="py-96 mt-96 text-white text-center font-bold">layout</div>
    </section>
  );
}
export default Main;
