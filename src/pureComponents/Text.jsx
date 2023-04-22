const Text = ({
  handleChange,
  value,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) => {
  return (
    <input
      autocomplete="off"
      onChange={handleChange}
      id={id}
      name={name}
      type={type}
      required={isRequired}
      placeholder={placeholder}
      className={customClass}
    />
  );
};

export default Text;
