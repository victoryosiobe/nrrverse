import Search from "../../../components/Search";
import Category from "./Category";
import { supress } from "../../../../public/variables";
import Plates from "./Plates";
import data from "../../../data/template";
const supressIds = supress.elements;
const category = [
  "all",
  "heroes",
  "nav bars",
  "side bars",
  "footers",
  "icons",
  "buttons",
  "modals",
  "animations",
  "layouts",
  "images",
  "containers",
  "patterns",
  "gradients",
];

function elList() {
  const listAccum = [];
  const keysOutter = Object.keys(data);
  for (let i = 0; i < keysOutter.length; i++)
    listAccum.push(listEr(data[keysOutter[i]], keysOutter[i]));
  return listAccum.flat();
}
function listEr(d, username) {
  console.log(username, "yyyyy");
  const list = [];
  const dEl = d.elements;
  const keys = Object.keys(dEl);
  const dElL = keys.length;
  if (dElL > 1) {
    for (let j = 0; j < dElL; j++) core(dEl[keys[j]], keys[j], username, j);
  } else core(dEl[keys[0]], keys[0], 0);
  function core(el, name, username, index) {
    list.push({
      username: username,
      author: d.author,
      dLink: d.dLink,
      name: name,
      code: el.code,
      category: el.category,
      stack: el.stack,
      keywords: el.keywords,
      guide: el.guide,
      index: index,
      link: "display/" + username + "/" + name + "/" + index,
    });
  }
  return list;
}

function elemList() {
  const list = elList();
  const accum = [];
  console.log(list, "perfect");
  for (let k = 0; k < list.length; k++) accum.push(<Plates data={list[k]} />);
  return accum;
}
console.log(elemList(), "sup");
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
      <div className="py-2 flex flex-row flex-wrap gap-5 justify-center dark:text-white">
        {elemList()}
      </div>
    </section>
  );
}
export default Main;
