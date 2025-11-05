import Text from './Text';
import Integer from './Integer';
import Email from './Email';
import Textarea from './Textarea';

const fixedInputClass =
  'mb-5 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out';

const components = {
  text: Text,
  textarea: Textarea,
  email: Email,
  integer: Integer,
};

const InputField = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  fieldType = 'text',
}) => {
  const DynamicInput = components[fieldType];

  return (
    <label htmlFor={labelFor} className="form-group block">
      <span className="block mb-2 flex text-slate-200">
        {labelText}
        {isRequired && <span className="ml-1 text-cyan-400">*</span>}
      </span>

      <DynamicInput
        handleChange={handleChange}
        id={id}
        name={name}
        type={type}
        isRequired={isRequired}
        customClass={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
