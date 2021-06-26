interface IProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  id?: string;
  fullWidth?: boolean;
}

const InputGroup: React.FC<IProps> = (props) => {
  const {
    label,
    placeholder,
    id,
    fullWidth,
    value,
    onChange,
    type = "text",
  } = props;

  return (
    <div className={["w-full px-3", fullWidth ? "" : "md:w-1/2"].join(" ")}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
