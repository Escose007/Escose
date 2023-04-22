const Textarea = ({
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
    <textarea
      autocomplete="off"
      onChange={handleChange}
      id={id}
      name={name}
      type={type}
      required={isRequired}
      placeholder={placeholder}
      className={customClass}
    ></textarea>
  );
};

export default Textarea;
