import { useParams } from "react-router-dom";
import data from "../../data/template";
import DangerousComp from "../../components/DangerousComp";
const Display = () => {
  const { username, name, index } = useParams();
  let code;
  for (let key in data) {
    if (key === username) {
      const elementsObj = data[key].elements;
      for (let keyE in elementsObj) {
        if (keyE === name) {
          code = elementsObj[keyE].code;
        }
      }
      break;
    }
  }
  return (
    <section>
      <DangerousComp html={code} />
    </section>
  );
};
export default Display;
