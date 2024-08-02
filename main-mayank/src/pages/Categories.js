import React, { useEffect, useState } from "react";
import axios from "axios";
import * as CONFIG_JSON from "../routes/endPoints";
import { message } from "antd";
import { ErrorMessage, Formik } from "formik";
import { CreateCategoriesSchema } from "../utils/schema";
import { getAuth, getDateFormat } from "../utils/pip";

function Categories() {
  // const [active,setactive] = useState(true)
  // const siderbarAction = () => {
  // setactive(!active)
  // }
  const [categories, setCategories] = useState([]);
  const [editDetails, setEditDetails] = useState();
  const [editinCategory, setEditinCategory] = useState({
    categoryId: "",
    category_name: "",
    description: "",
    status: 0,
  });
  const initialValues = {
    category_name: "",
    description: "",
    status: "Enable",
  };
  useEffect(() => {
    allCategories();
  }, []);

  const allCategories = () => {
    const token = getAuth();
    axios({
      method: "get",
      url: CONFIG_JSON?.BASE_URL + CONFIG_JSON?.fetchCategories,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res?.data?.success) {
          setCategories(res?.data?.data);
        } else {
          message?.error(res?.data?.message);
          console.error("Categories API not working");
        }
      })
      .catch((err) => {
        console.log("An error occurred while updating the profile:", err);
      });
  };

  const handleCreateCategories = (value, { resetForm, setSubmitting }) => {
    const token = getAuth();
    axios({
      method: "post",
      url: CONFIG_JSON?.BASE_URL + CONFIG_JSON?.createCategories,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: value,
    })
      .then((res) => {
        if (res?.data?.success) {
          allCategories();
          console.log(res?.data?.message);
          message.success(res?.data?.message);
        } else {
          console.error("API returned an error:", res?.data?.message);
          message.error(res?.data?.message || "Failed to create category");
        }
      })
      .catch((err) => {
        console.log("API not working", err);
        message.error("An error occurred while creating the category");
      });
  };

  const editCategories = () => {
    console.log("edit categories");
    const token = getAuth();
    axios({
      method: "post",
      url: CONFIG_JSON?.BASE_URL + CONFIG_JSON?.editCategory,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deletecategories = (id) => {
    const token = getAuth();
    const data = { categoryId: id };
    axios({
      method: "delete",
      url: CONFIG_JSON?.BASE_URL + CONFIG_JSON?.deleteCategory,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    })
      .then((res) => {
        if (res?.data?.success) {
          console.log(res?.data?.message);
          message.success(res?.data?.message);
          allCategories();
        } else {
          console.error("API returned an error:", res?.data?.message);
        }
      })
      .catch((err) => {
        console.log("API not working", err);
        message.error("An error occurred while creating the category");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditinCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (editinCategory.categoryId === "") {
      setEditinCategory((prevState) => ({
        ...prevState,
        categoryId: editDetails.id,
      }));
    }
    console.log("handleChange: ", { ...editinCategory, [name]: value });
  };

  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg ">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
            <h4 className="ct_fs_24  ct_fw_600">All Categories</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ct_category_select_2">
                Sorted by :
                <select>
                  <option value="">Old to New</option>
                  <option value="">Old to New</option>
                </select>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="ct_blue_btn ct_btn_h_48"
                  data-bs-toggle="modal"
                  data-bs-target="#create_new_category"
                >
                  + Create New Category
                </a>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-4">
            <table className="table ct_custom_table">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>Creation date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.category_name}</td>
                    <td>{item?.description}</td>
                    <td>{getDateFormat(item?.createdAt)}</td>
                    <td>
                      <label className="ct_switch">
                        <input type="checkbox" defaultChecked="" />
                        <div className="ct_slider">
                          <div className="ct_circle">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={6}
                              height={6}
                              x={0}
                              y={0}
                              viewBox="0 0 365.696 365.696"
                              style={{
                                enableBackground: "new 0 0 512 512",
                              }}
                              xmlSpace="preserve"
                              className="cross"
                            >
                              <g>
                                <path
                                  d="M243.188 182.86 356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
                                  fill="currentColor"
                                  data-original="#000000"
                                />
                              </g>
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width={10}
                              height={10}
                              x={0}
                              y={0}
                              viewBox="0 0 24 24"
                              style={{
                                enableBackground: "new 0 0 512 512",
                              }}
                              xmlSpace="preserve"
                              className="checkmark"
                            >
                              <g>
                                <path
                                  d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                  fill="currentColor"
                                  data-original="#000000"
                                  className=""
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </label>
                    </td>
                    <td>
                      <i
                        href="javascript:void(0)"
                        className="fa-solid fa-edit"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_new_category"
                        onClick={() => {
                          // setEditDetails(item);
                          setEditinCategory(item);
                          console.log("user editing category-->", item);
                        }}
                      />
                    </td>
                    {/* <td>
                      <i
                        href="javascript:void(0)"
                        class="fa-solid fa-trash"
                        onClick={() => deletecategories(item?.id)}
                      ></i>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}

      {/* Create Category modal S */}
      <div
        className="modal fade"
        id="create_new_category"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="create_new_categoryLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content pb-4 ">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close ct_cloose_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={initialValues}
                validationSchema={CreateCategoriesSchema}
                onSubmit={(values, actions) => {
                  handleCreateCategories(values, actions);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <h4 className="ct_fs_24 text-center ct_fw_600 mb-5">
                      New Category Details
                    </h4>
                    <div className="row mt-4">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label
                            htmlFor="category_name"
                            className="mb-2 ct_fw_500"
                          >
                            Category Name{" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            className="ct_input form-control"
                            placeholder="Category Name"
                            id="category_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category_name}
                          />
                          <ErrorMessage
                            name="category_name"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="status" className="mb-2 ct_fw_500">
                            Status <span className="ct_required_text">*</span>
                          </label>
                          <select
                            className="ct_input form-control"
                            id="status"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.status}
                          >
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                          </select>

                          <ErrorMessage
                            name="status"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-4">
                        <div className="form-group">
                          <label
                            htmlFor="description"
                            className="mb-2 ct_fw_500"
                          >
                            Description
                          </label>
                          <textarea
                            className="ct_input form-control"
                            id="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer border-0 text-center">
                      <button
                        type="submit"
                        className="ct_blue_btn ct_btn_h_48 mx-auto"
                        data-bs-dismiss="modal"
                        onClick={handleSubmit}
                      >
                        Add Category
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/*  Category modal End */}

      {/* Edit Category modal S */}
      <div
        className="modal fade"
        id="edit_new_category"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="create_new_categoryLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content pb-4 ">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close ct_cloose_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <h4 className="ct_fs_24 text-center ct_fw_600 mb-5">
                  Edit Category Details
                </h4>
                <div className="row mt-4">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="category_name" className="mb-2 ct_fw_500">
                        Category Name{" "}
                        <span className="ct_required_text">*</span>
                      </label>
                      <input
                        type="text"
                        className="ct_input form-control"
                        name="category_name"
                        value={editinCategory?.category_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label
                        htmlFor="category_status"
                        className="mb-2 ct_fw_500"
                      >
                        Category<span className="ct_required_text">*</span>
                      </label>
                      <select
                        className="ct_input form-control"
                        name="category_status"
                        value={editinCategory.category_status}
                        onChange={handleChange}
                      >
                        <option value="Enable">Enable</option>
                        <option value="Disable">Disable</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="form-group">
                      <label htmlFor="description" className="mb-2 ct_fw_500">
                        Description{" "}
                      </label>
                      <textarea
                        className="ct_input form-control"
                        name="description"
                        value={editinCategory?.description}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer border-0 text-center">
              <button
                type="button"
                className="ct_blue_btn ct_btn_h_48 mx-auto"
                data-bs-dismiss="modal"
              >
                Category Edited
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  Edit modal End */}
    </>
  );
}

export default Categories;
