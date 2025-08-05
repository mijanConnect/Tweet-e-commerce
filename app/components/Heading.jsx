export default function Heading({
  hehadingTitle,
  headingMainBlack,
  headingMainColor,
}) {
  return (
    <>
      <div className="">
        <h2 className="lobster heading-title">{hehadingTitle}</h2>
        <h3 className="heading-main">
          {headingMainBlack} <span>{headingMainColor}</span>
        </h3>
      </div>
    </>
  );
}
