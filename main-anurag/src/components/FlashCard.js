import React from "react";
import { getCapitalization } from "../utils/pip";

const FlashCard = ({ card, index, onClick }) => {
  return (
    <div className="col-xxl-4 col-xl-6 mb-4">
      <a href="javascript:void(0)" className="text-dark">
        <div className="ct_flash_card pb-0">
          <i className="fa-regular fa-pen-to-square" onClick={onClick}></i>
          <h4 className="ct_blue_text ct_fw_600 mx-auto ct_fs_16">
            {`Flash Card ${index}`}
          </h4>
          <div className="d-flex align-items-center justify-content-between gap-2 my-3 ">
            <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
              {`Question ${index}`}
            </p>
            <p className="mb-0 ct_fw_600 ct_blue_text ct_fs_14">
              {getCapitalization(card?.categoryName)}
            </p>
          </div>
          {card?.flash_card_type == "Multi Options" ? (
            <>
              <p className="ct_fw_600 mb-0">{card?.question}</p>
              <div className="mt-5">
                <div className="ct_flash_card_2_col mt-2">
                  {card?.options.map((option, index) => (
                    <div className=" mb-2" key={index}>
                      <div>
                        <input
                          className="radio-input"
                          name={`radio-group-${card?.id}`}
                          id={`radio${index}-${card?.id}`}
                          type="radio"
                          checked={option?.correct_answer}
                        />
                        <label
                          className="radio-label"
                          htmlFor={`radio${index}-${card?.id}`}
                        >
                          <span className="radio-inner-circle" />
                          {option?.value}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="ct_fw_600 mb-0">{card?.question}</p>
              <div className="mt-5">
                <p className="my-1">Answer</p>
                <div className="row mt-2">
                  <div className="col-md-12 mb-2">
                    <input
                      type="text"
                      className="ct_input form-control ct_input_56"
                      placeholder="Type Here"
                      value={card?.correct_answer}
                      disabled={true}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </a>
    </div>
  );
};

export default FlashCard;
