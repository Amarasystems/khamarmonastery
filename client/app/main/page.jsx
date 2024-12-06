"use client";
import { useState } from "react";

export default function page() {
//   const [error, setError] = useState("");
//   const [year, setYear] = useState("");
//   const [sign, setSign] = useState("");
//   const [gender, setGender] = useState("");

  return (
    <div className="max-w-[1440px] w-full h-[100vh] m-auto flex items-center justify-center">
      <div className="flex justify-center items-center w-full">
        <div className="bg-img"></div>
        <div className="max-w-[600px] w-full p-4 gap-4 flex items-center justify-center flex-col shadow-2xl rounded-xl">
          <img
            className="w-[140px] h-[140px] cropped-image rounded-[50%]"
            src="https://res.cloudinary.com/dv0wipf01/image/upload/v1733475777/hiid/mijg44yy7kq3s2oe1sn0.jpg"
            alt=""
          />

          <div className="flex flex-col gap-4 w-full">
            <input
              className="h-[40px] border-[1px] w-full border-solid border-black rounded-lg"
              type="text"
              placeholder="Төрсөн он"
            />
            <input
              className="h-[40px] border-[1px] border-solid border-black rounded-lg"
              type="text"
              placeholder="Таны жил"
            />
            <select
              className="border-[1px] h-[40px] border-solid border-black rounded-lg"
              id="gender"
              name="gender"
            >
              <option value="male">Эрэгтэй</option>
              <option value="female">Эмэгтэй</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
