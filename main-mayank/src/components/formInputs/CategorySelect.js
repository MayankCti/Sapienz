import React from "react";
import { getCapitalization } from "../../utils/pip";

const CategorySelect = ({
  options,
  valuefilter=false,
  value,
  onChange,
  className,
  defaultValue = "All",
  name = "name",
  isAll = true,
}) => {
  return (
    <select
      className={className ?? ""}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name={name}
    >
      {isAll && <option value="all">{defaultValue}</option>}
      {options?.map((option) => (
        <option key={option?.id} value={!valuefilter ? option?.id : option?.category_name}>
          {getCapitalization(option?.category_name)}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
