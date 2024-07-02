function FootPinch({ label, href, style }) {
  return (
    <a href={href}>
      <span className={style ? style : ""}>{label}</span>
    </a>
  );
}
export default FootPinch;
