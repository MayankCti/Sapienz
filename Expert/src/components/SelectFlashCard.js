import React from "react";
import { getCapitalization } from "../utils/pip";

const SelectFlashCard = ({
  card,
  id,
  options,
  index,
  selectedIds,
  setSelectedIds,
}) => {
  const handleCheckboxChange = () => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className={`col-xl-4 mb-4`}>
      <div
        className={`ct_flash_card pb-0 ${
          selectedIds?.includes(id) ? "ct_flash_card_active" : ""
        }`}
      >
        <div className="d-flex align-items-center gap-2">
          <div>
            <input
              type="checkbox"
              className="ct_custom_checkbox"
              checked={selectedIds?.includes(id)}
              onChange={handleCheckboxChange}
            />
          </div>
          <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">{`Flash Card ${id}`}</h4>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-2 my-3">
          <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">{`Question ${index}`}</p>
          <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
            {getCapitalization(card?.categoryName)}
          </p>
        </div>
        <p className="ct_fw_600 mb-0">{card?.question}</p>

        {card?.flash_card_type == "Multi Options" ? (
          <div className="mt-5">
            <div className="row mt-2">
              {options?.map((opt, index) => (
                <div className="col-md-6 mb-2" key={index}>
                  <div>
                    <input
                      className="radio-input"
                      name={`radio-group-${id}`}
                      id={`radio-${id}-${index}`}
                      type="radio"
                      defaultChecked={opt?.correct_answer}
                    />
                    <label
                      className="radio-label"
                      htmlFor={`radio-${id}-${index}`}
                    >
                      <span className="radio-inner-circle" />
                      {opt?.value}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-5">
            <p className="my-1">Answer</p>
            <div className="row mt-2">
              <div className="col-md-12 mb-2">
                <input
                  type="text"
                  className="ct_input form-control ct_input_56"
                  value={card?.correct_answer}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectFlashCard;
