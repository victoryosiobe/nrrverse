const DangerousComp = ({ html, style }) => (
  <div className={style} dangerouslySetInnerHTML={{ __html: html }} />
);

export default DangerousComp;
