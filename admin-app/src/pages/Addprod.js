import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { object, string, number } from 'yup';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { getCategories } from "../features/pcategory/pcategorySlice";
import Multiselect from "react-widgets/Multiselect";

const schema = object({
  title: string().required('Title is Required'),
  description: string().required('Description is Required'),
  price: number().required("Please Enter Product Price"),
  quantity: number().required("Quantity is Required"),
  brand: string().required("Please Select Brand"),
  category: string().required("Please Select Category"),
});

const Addprod = () => {
  const dispatch = useDispatch();
  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      brand: '',
      category: '',
      quantity:''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <div>
      <h3 className="mb-4 title"> Add Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
          <div className="mb-3">
            <CustomInput
              type="text"
              label="Enter Product Title"
              name="title"
              onCh={formik.handleChange}
              onBlr={formik.handleBlur}
              val={formik.values.title}
            />
            <div className="error">{formik.touched.title && formik.errors.title}</div>

            <CustomInput
              type="number"
              label="Enter Product Price"
              name="price"
              onCh={formik.handleChange("price")}
              onBlr={formik.handleBlur("price")}
              value={formik.values.price}
            />
            <div className="error">{formik.touched.price && formik.errors.price}</div>
            <CustomInput
            
              type="number"
              label="Enter Product Quantity"
              name="quantity"
              onCh={formik.handleChange("quantity")}
              onBlr={formik.handleBlur("quantity")}
              value={formik.values.quantity}
            />
            <div className="error">{formik.touched.quantity && formik.errors.quantity}</div>

            <select
              name="category"
              onChange={formik.handleChange("category")}
              onBlur={formik.handleBlur("category")}
              value={formik.values.category}
              className="form-control py-3 mb-3"
            >
              <option value="">Select Category</option>
              {catState.map((i, j) => (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              ))}
            </select>
            <div className="error">{formik.touched.category && formik.errors.category}</div>

            <select
              name="brand"
              onChange={formik.handleChange("brand")}
              onBlur={formik.handleBlur("brand")}
              value={formik.values.brand}
              className="form-control py-3 mb-3"
            >
              <option value="">Select Brand</option>
              {brandState.map((i, j) => (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              ))}
            </select>
            <div className="error">{formik.touched.brand && formik.errors.brand}</div>
          </div>
          <div className="">
            <div className="error">{formik.touched.description && formik.errors.description}</div>
            <ReactQuill
              theme="snow"
              name="description"
              onChange={(value) => formik.setFieldValue('description', value)}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </div>
          <button className="btn btn-success border-0 rounded-3 my-5" type="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addprod;
