const Button = () => {
  return (
    <button
      className="bnt btn-primary"
      onClick={(event) => (event.target.innerHtml = "You clicked me!")}
    >
      Click button
    </button>
  );
};
export default Button;
