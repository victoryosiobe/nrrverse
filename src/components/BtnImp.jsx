const BtnImp = ({ label, href }) => (
  <a href={href}>
    <span className="bg-blue-600 text-white text-center rounded p-2 px-5 block animate-bounce">
      {label}
    </span>
  </a>
);

export default BtnImp;
