import React, { useEffect, useState } from "react";
import axios from "axios";
import * as CONFIG_JSON from "../routes/endPoints";
import { message } from "antd";
import { ErrorMessage, Formik } from "formik";
import { CreateCategoriesSchema } from "../utils/schema";
import { getAuth, getDateFormat } from "../utils/pip";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState('Old to New'); 
  const [editinCategory, setEditinCategory] = useState({});
  // const initialValues = {
  //   category_name: "",
  //   description: "",
  //   status: "Enable",
  // };
  const initialValues = {
    category_name: editinCategory?.category_name || "",
    description: editinCategory?.description || "",
    status: editinCategory?.status || "Enable",
  };

  useEffect(() => {
    allCategories();
  }, [sortOrder]);

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
          let sortedCategories = res?.data?.data;

          // Sort categories based on sortOrder
          sortedCategories.sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);

            return sortOrder === 'New to Old' ? dateB - dateA : dateA - dateB;
          });

          setCategories(sortedCategories);
        }
      })
      .catch((err) => {
        console.log("An error occurred while fetching categories:", err);
      });
  };



  // const allCategories = () => {
  //   const token = getAuth();
  //   axios({
  //     method: "get",
  //     url: CONFIG_JSON?.BASE_URL + CONFIG_JSON?.fetchCategories,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res?.data?.success) {
  //         setCategories(res?.data?.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("An error occurred while fetching categories:", err);
  //     });
  // };

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
          message.success(res?.data?.message);
        } else {
          message.error(res?.data?.message || "Failed to create category");
        }
        resetForm();
        setSubmitting(false);
      })
      .catch((err) => {
        message.error("An error occurred while creating the category");
        setSubmitting(false);
      });
  };

  const handleEditClick = (item) => {
    setEditinCategory({
      ...editinCategory,
      categoryId: item?.id,
      category_name: item?.category_name,
      description: item?.description,
      status: item?.status,
    });
    console.log("updating editin category",editinCategory);
  };

  useEffect(()=>{
    console.log("use effect editncategory",editinCategory?.category_name);
  },[editinCategory])

  const handleEditCategory = (values, { resetForm, setSubmitting }) => {
    const token = getAuth();
    axios({
      method: "post",
      url: CONFIG_JSON?.BASE_URL + CONFIG_JSON?.editCategory,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { ...values, categoryId: editinCategory.categoryId },
    })
      .then((res) => {
        if (res?.data?.success) {
          console.log("cti",res?.data);
          allCategories();
          message.success(res?.data?.message);
        } else {
          message.error(res?.data?.message || "Failed to update category");
        }
        resetForm();
        setSubmitting(false);
      })
      .catch((err) => {
        message.error("An error occurred while updating the category");
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="ct_inner_dashbaord_main">
        <div className="ct_white_bg">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
            <h4 className="ct_fs_24 ct_fw_600">All Categories</h4>
            <div className="d-flex align-items-center gap-3">
              <div className="ct_category_select_2">
                Sorted by :
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="Old to New">Old to New</option>
                  <option value="New to Old">New to Old</option>
                </select>
              </div>
              <div>
                <a
                  href="#"
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
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </label>
                      </td>
                    </td>
                    <td>
                      <i
                        className="fa-solid fa-edit"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_new_category"
                        onClick={() => handleEditClick(item)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Category Modal */}
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
          <div className="modal-content pb-4">
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
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  handleCreateCategories(values, { resetForm, setSubmitting });
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
                          <label className="mb-2 ct_fw_500">
                            Category Name{" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            className="ct_input form-control"
                            placeholder="Category Name"
                            id="category_name"
                            name="category_name"
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
                          <label className="mb-2 ct_fw_500">Description</label>
                          <textarea
                            className="ct_input form-control"
                            id="description"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.description}
                          />
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="mb-2 ct_fw_500">Status</label>
                          <select
                            className="ct_input form-control"
                            id="status"
                            name="status"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.status}
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
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="ct_blue_btn"
                          disabled={isSubmitting}
                          data-bs-dismiss="modal"
                        >
                          {isSubmitting ? "Creating..." : "Create Category"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Category Modal */}
      {editinCategory && (
      <div
        className="modal fade"
        id="edit_new_category"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="edit_new_categoryLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content pb-4">
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
                initialValues={{
                  category_name: editinCategory?.category_name || "",
                  description: editinCategory?.description || "",
                  status: editinCategory?.status || "Enable",
                }}
                validationSchema={CreateCategoriesSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                  handleEditCategory(values, { resetForm, setSubmitting });
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
                    {console.log("formik values",values)}
                    <h4 className="ct_fs_24 text-center ct_fw_600 mb-5">
                      Edit Category Details
                    </h4>
                    <div className="row mt-4">
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="mb-2 ct_fw_500">
                            Category Name{" "}
                            <span className="ct_required_text">*</span>
                          </label>
                          <input
                            type="text"
                            className="ct_input form-control"
                            placeholder="Category Name"
                            id="category_name"
                            name="category_name"
                            // defaultValue={editinCategory?.category_name}
                            value={values?.category_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.category_name && touched.category_name ? (
                            <div className="text-danger">
                              {errors.category_name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="mb-2 ct_fw_500">Description</label>
                          <textarea
                            className="ct_input form-control"
                            id="description"
                            name="description"
                            value={values?.description}
                            // defaultValue={editinCategory?.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.description && touched.description ? (
                            <div className="text-danger">
                              {errors.description}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label className="mb-2 ct_fw_500">Status</label>
                          <select
                            className="ct_input form-control"
                            id="status"
                            name="status"
                            value={values?.status}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="Enable">Enable</option>
                            <option value="Disable">Disable</option>
                          </select>
                          {errors.status && touched.status ? (
                            <div className="text-danger">{errors.status}</div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="ct_blue_btn"
                          disabled={isSubmitting}
                          data-bs-dismiss="modal"
                        >
                          {isSubmitting ? "Updating..." : "Update Category"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default Categories;
