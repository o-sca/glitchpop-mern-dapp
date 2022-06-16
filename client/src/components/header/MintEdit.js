import { useState } from "react";
import Select from "../Select";
import plus from "../../assets/buttons/plus.svg";
import minus from "../../assets/buttons/minus.svg";

const MintEdit = () => {
  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
  ];

  const [option, setOption] = useState(1);

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  function increase(e) {
    e.preventDefault();
    if (option === 3) return;
    setOption(option + 1)
  }

  function decrease(e) {
    e.preventDefault();
    if (option === 1) return;
    setOption(option - 1)
  }

  return (
    <div className="mint-edit-items">
      <button id="decrease" onClick={decrease}>
        <img src={minus} alt="decrease" />
      </button>
      <Select
        options={options}
        name="mint-select"
        classname="num-mints"
        handleChange={handleChange}
        value={option}
      />
      <button id="increase" onClick={increase}>
        <img src={plus} alt="increase" />
      </button>
    </div>
  );
};

export default MintEdit;