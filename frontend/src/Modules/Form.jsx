import React from "react";

const Form = ({ handleSubmit,register,onSubmitHandler,errors,itemData }) => {

  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="userName"
              {...register("userName", {
                required: true,
              })}
              type="text"
              placeholder="userName"
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">username is required.</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              {...register("password", {
                required: true,
              })}
              placeholder="******************"
            />
            {errors.password && (
              <p className="text-sm text-red-600">password is required.</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Images
            </label>
            <input
              className="shadow cursor-pointer appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="file"
              name="image"
              {...register("image", {
                required: true,
              })}
            />
            {errors.image && (
              <p className="text-sm text-red-600">image is required.</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {itemData ? "Update post" : "Create post"}
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
