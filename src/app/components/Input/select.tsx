'use-client'
import React from 'react';

interface OptionType {
  value: string;
  label: string;
}

interface SelectProps {
  options: OptionType[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, id, name }) => {
  return (
    <div className="w-full">
      {/* <p className="text-xs mb-1 pl-3">
        {name}
      </p> */}
    <select
      className="bg-main-bg border-[2px] p-2 w-[calc(100vw-24px)] rounded-full sm:w-full px-3 mx-3"
      onChange={onChange}
      id={id}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
    </div>
  );
};

export default Select;