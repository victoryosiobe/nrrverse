import DangerousComp from "../../../components/DangerousComp";
const Plates = ({ data }) => (
  <div className="w-fit-content m-5 p-5 border shadow-lg rounded-lg">
    <div className="over-flow-y">
      <iframe src={data.link} className="h-[100em]"></iframe>
    </div>
    <div className="text-2xl text-left font-extrabold uppercase">
      {data.name}
    </div>
    <div className="text-sm text-gray-500">
      {data.author} | {data.username}
    </div>
  </div>
);
export default Plates;
