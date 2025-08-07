export default function Count({ count, title }) {
  return (
    <>
      <div className="count-wrapper">
        <h2 className="count-heading">{count}</h2>
        <p className="count-paragraph">{title}</p>
      </div>
    </>
  );
}
