import React from "react";
import { getCapitalization } from "../../utils/pip";

const CategorySelect = ({
  options,
  value,
  onChange,
  className,
  defaultValue = "All",
}) => {
  return (
    <select
      className={className ?? ""}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.id} value={option.category_name}>
          {getCapitalization(option.category_name)}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
