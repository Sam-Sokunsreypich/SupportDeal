import React, { useEffect } from "react";
import { useCreateProductMutation } from "../../features/auth/addProductApi";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddProduct() {
  const [createProduct] = useCreateProductMutation();

  const initailValues = {
    id: "",
    title: "",
    description: "",
    image: "",
    price: "",
    discount: "",
    stock: "",
    store_category: "",
    user_category: "",
    after_dis_price: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    description: Yup.string().required("Description is required!"),
    image: Yup.string(),
    price: Yup.number().required("Price is required!"),
    discount: Yup.number(),
    stock: Yup.number().required("Stock is required!"),
    store_category: Yup.string(),
    user_category: Yup.string(),
    after_dis_price: Yup.number(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      formData.append("title",values.title);
      formData.append("description",values.description);
      formData.append("price",values.price),
      formData.append("discount",values.discount),
      formData.append("stock", values.stock),
      formData.append("store_category", values.store_category),
      formData.append("user_category", values.user_category),
      formData.append("after_dis_price", values.after_dis_price);
      if(values.imageFile){
        formData.append("image",values.imageFile)
      }

      const result = await createProduct(formData);
      
      console.log("Uploaded New product:", result);
      
      toast.success("Product created successfully!");
      resetForm();
    } catch (err) {
      toast.error("Failed to insert product!")
      console.error("Failed to insert product!", err);
    }
    setSubmitting(false);
  };

 



const AutoCalculateDiscount = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const price = parseFloat(values.price) || 0;
    const discount = parseFloat(values.discount) || 0;

    const after_dis_price = price - (price * discount) / 100;
    setFieldValue("after_dis_price", after_dis_price.toFixed(2));
  }, [values.price, values.discount, setFieldValue]);

  return null;
};


  return (
    <Formik
      initialValues={initailValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <>
      <AutoCalculateDiscount/>
      <Form className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center text-4xl font-bold">Insert</div>
        <div className="mt-3 text-center text-4xl font-bold">
           New Product
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pb-2">
              <label
                htmlFor="title"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Product Title
              </label>
              <Field
                name="title"
                type="text"
                placeholder="Put your Product name"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="pb-2">
              <label
                htmlFor="description"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Product Description
              </label>
              <Field
                name="description"
                type="text"
                placeholder="Put your workspace name..."
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>
          <div>
           <label  htmlFor="imageFile"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Product Image
           </label>
          <Field name="imageFile">
            {({ form }) => (
              <input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  form.setFieldValue("imageFile", event.currentTarget.files[0])
                }
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
            )}
          </Field>
      <ErrorMessage name="imageFile" component="div" className="text-sm text-red-500" /> </div>

          <div className="my-6 flex gap-4">
            <Field
              name="store_category"
              as="select"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option className="font-semibold text-slate-300">
                Please Select
              </option>
              
              <option value="General" label="General">
                {" "}
                General
              </option>
              <option value="One get One" label="One get One">
                One get One
              </option>
              <option value="Clearence Sale" label="Clearence Sale">
                Clearence Sale
              </option>
            </Field>
            <Field
              name="discount"
              as="select"
              className="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option className="font-semibold text-slate-300">
                Please Select Discount
              </option>
              <option value="0" label="0">
                {" "}
                No discount
              </option>
              <option value="10" label="10">
                {" "}
                10%
              </option>
              <option value="15" label="15">
                15%
              </option>
              <option value="20" label="20">
                20%
              </option>
               <option value="30" label="30">
                30%
              </option>
            </Field>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
            <div className="pb-2">
              <label
                htmlFor="price"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Product Price
              </label>
              <Field
                name="price"
                type="number"
                placeholder="Put your Product name"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="pb-2">
              <label
                htmlFor="stock"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Stock Product
              </label>
              <Field
                name="stock"
                type="number"
                placeholder="Put your workspace name..."
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <ErrorMessage
                name="stock"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">

            <div className="py-6">
              <Field
              name="user_category"
              as="select"
              className="block w-full rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            >
              <option className="font-semibold text-slate-300">
                Please Select
              </option>
              
              <option value="Man" label="Man">
                {" "}
                Man
              </option>
              <option value="Women" label="Women">
                Women
              </option>
              <option value="Boy" label="Boy">
                Boy
              </option>
              <option value="girl" label="girl">
                girl
              </option>
            </Field>
            </div>
            
          
          {/* <div className="">
              <label
                htmlFor="after_dis_price"
                className="font-medium text-primary dark:text-gray-50 text-txt16 lg:text-txt18"
              >
                Product after discount
              </label>
              <Field
                name="after_dis_price"
                type="number"
                placeholder="Put your workspace name..."
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              />
              <ErrorMessage
                name="after_dis_price"
                component="div"
                className="text-sm text-red-500"
              />
            </div> */}
          </div>
          <div className="text-center">
            <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
            type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
      </>
    </Formik>
  );
}
