const Select = ({ options, name, classname, handleChange, value }) => {
  return (
    <select
      name={name}
      className={classname}
      onChange={handleChange}
      value={value}
    >
      {options.map((opt) => {
        return (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
