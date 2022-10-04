import { useEffect, useState} from 'react';
import "./AddProductForm.scss";
import Toggle from "react-toggle";
import "react-toggle/style.css";

function AddProductForm  () {

      const [productInfo, setProductInfo] = useState({
        name: "",
        brand: "",
        price: "",
        boughtFrom: "",
        inMy: "",
        expireDate: "",
        quantity: "1",
        comment: "",
        createdOn: new Date().toISOString(),
        saveAsTemplate: true,
      });
      const handleChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setProductInfo({
          ...productInfo,
          [event.target.id]: event.target.value,
        });
      };
      const handleToggle = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setProductInfo({
          ...productInfo,
          saveAsTemplate:event.target.checked,
        });
      }

      const handleSubmit = () =>{
        console.log(productInfo)
      }

    return (
      <form className="add-product-form row g-3">
        <div className="form-floating col-md-6">
          <input
            type="email"
            className="form-control"
            id="name"
            placeholder="name"
            onChange={(e) => handleChange(e)}
            value={productInfo.name}
          />
          <label htmlFor="name">Name - required</label>
        </div>
        <div className="form-floating col-md-3">
          <input
            type="number"
            min="0"
            className="form-control"
            id="price"
            placeholder="price"
            onChange={(e) => handleChange(e)}
            value={productInfo.price}
          />
          <label htmlFor="price">Unit Price</label>
        </div>
        <div className="form-floating col-md-3">
          <input
            type="number"
            min="0"
            className="form-control"
            id="quantity"
            placeholder="quantity"
            onChange={(e) => handleChange(e)}
            value={productInfo.quantity}
          />
          <label htmlFor="quantity">Quantity</label>
        </div>

        <div className="form-floating col-md-3">
          <input
            type="text"
            className="form-control"
            id="brand"
            placeholder="brand"
            onChange={(e) => handleChange(e)}
            value={productInfo.brand}
          />
          <label htmlFor="brand">Brand</label>
        </div>
        <div className="form-floating col-md-3">
          <input
            type="text"
            className="form-control"
            id="boughtFrom"
            placeholder="boughtfrom"
            onChange={(e) => handleChange(e)}
            value={productInfo.boughtFrom}
          />
          <label htmlFor="boughtFrom">Bought from</label>
        </div>
        <div className="form-floating col-md-3">
          <input
            type="text"
            className="form-control"
            id="inMy"
            placeholder="inMy"
            onChange={(e) => handleChange(e)}
            value={productInfo.inMy}
          />
          <label htmlFor="inMy">Put it in My</label>
        </div>
        <div className="form-floating col-md-3">
          <input
            type="date"
            className="form-control"
            id="expireDate"
            placeholder="brand"
            onChange={(e) => handleChange(e)}
            value={productInfo.expireDate}
          />
          <label htmlFor="expireDate">Expire Date</label>
        </div>

        <div className="form-floating col-md-12">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="comment"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <label htmlFor="comment">Comment</label>
        </div>
        <div className="col-md-6">
          <Toggle
            id="saveAsTemplate"
            onChange={(e) => handleToggle(e)}
            defaultChecked={productInfo.saveAsTemplate}
          />
          <label htmlFor="saveAsTemplate">Save as template</label>
        </div>
        <div className="col-md-3">
          <button type="button" disabled ={productInfo.name === ""}onClick = {handleSubmit} className="btn btn-outline-success">
            Add Item
          </button>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-outline-danger">
            Cancel
          </button>
        </div>
      </form>
    );


}

  

export default AddProductForm;