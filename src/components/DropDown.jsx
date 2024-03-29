import { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Discuss } from "react-loader-spinner";
import { data1 } from "../pages/Auth/authSlice";

function DropDown({ title, items, type }) {
  const [showDrop, setShowDrop] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState();
  const modalRef = useRef();

  const handleSubmit = () => {
    setSearchParams({ q: searchQuery });
  };

  useClickOutside(modalRef, () => {
    setShowDrop(false);
  });
  //// image button bezar bara drop ha
  return (
    <>
      <div className="flex flex-col" ref={modalRef}>
        <button
          onClick={() => setShowDrop((prev) => !prev)}
          className="flex w-24 items-center justify-center rounded-lg border  py-2.5  text-center text-sm font-medium text-black hover:bg-red-600 hover:text-white focus:outline-none"
          type="button"
        >
          {title}
          {type === "checkbox" ? <img src="" alt="" /> : ""}
        </button>
        <div
          className={`mt-1 ${showDrop ? "" : "hidden"} w-24 divide-y divide-gray-100 rounded-lg shadow`}
        >
          <div className=" flex flex-col text-black ">
            {items?.map((data, index) => (
              <label
                onClick={(event) => {
                  setSearchQuery(event.target.textContent);
                  setShowDrop(false);
                  handleSubmit(event);
                }}
                key={index}
                className="messageCheckbox flex cursor-pointer gap-2 hover:bg-red-500 "
              >
                <input type="button" className="bg-slate-200 text-slate-600" />
                {data}
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DropDown;
