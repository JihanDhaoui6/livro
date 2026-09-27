import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData, typeData } from "../../static/data";


import { AiOutlinePlusCircle } from "react-icons/ai";
//import librarie from "../../../../back/model/librarie";
import { createBook } from "../../redux/actions/book";
import { toast } from "react-toastify";
const CreateBook = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.book);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [post, setPost] = useState("");
  const [stock, setStock] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success("Post created successfully!");
      navigate("/dashboard-books");
      window.location.reload();
    }
  }, [dispatch, error, success]);

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();
    images.forEach((image) => {
      newForm.append("images", image);
    });
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("author", author);
    newForm.append("originalPrice", originalPrice);
    newForm.append("post", post);
    newForm.append("stock", stock);
    newForm.append("pageNumber", pageNumber);
    newForm.append("librarieId", seller._id);
    dispatch(createBook(newForm));
  };
  return (
    <div className="w-[90%] 800px:w-[50%] bg-[#e2dbd085] shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll ">
      <h5 className="text-[30px] font-Poppins text-center">Create POST </h5>
      {/* ceation de foemulaire de livre */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            placeholder="Give your Book name ..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
        <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
          
            value={description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-10 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose a category">Choose a category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        

        <br />
        <div>
          <label className="pb-2">Author</label>
          <input
            type="text"
            name="author"
            value={author}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            placeholder="Give your Book author..."
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="price"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            required
            placeholder="Give your Book price..."
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            type post <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-10 rounded-md"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          >
            <option value="Choose a post Type">Choose a Type</option>
            {typeData &&
              typeData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        {/* <div>
          <label className="pb-2">
            type de post (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="price"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            placeholder="Give your Book price with discount..."
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
        </div> */}
        <br />
        <div>
          <label className="pb-2">
            Page Number <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="number"
            value={pageNumber}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            placeholder="Give your Book page number..."
            onChange={(e) => setPageNumber(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Book Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
            placeholder="Give your Book stock..."
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Imeges <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle
                size={30}
                className="mt-3  cursor-pointer"
                color="#555"
              />
            </label>
            {images &&
              images.map((image,index) => (
                <img
                  src={URL.createObjectURL(image)}
                  key={index}
                  alt=""
                  className="h-[120px] w-[120] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
