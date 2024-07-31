const Button = ({ disabled, handleClick, label }) => (
  <button disabled={disabled} onClick={handleClick}>
    {label}
  </button>
);

export default Button;
