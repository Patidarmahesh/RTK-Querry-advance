import React from "react";
import Pagination from "@mui/material/Pagination";
import {
  useAllProductsGetQuery,
  useGetProductQuery,
} from "../ReduxFeatures/api/paginationApi";
import { useSelector } from "react-redux";

const Paginationss = () => {
  const [limit, setLimit] = React.useState(4);
  const [page, setPage] = React.useState(1);
  const [skip, setSkip] = React.useState(0);
  const { search } = useSelector((state) => state.userPosts);
  const { data, isLoading, isFetching } = useGetProductQuery({
    limit,
    skip,
    search,
  });
  const { data: products } = useAllProductsGetQuery("products");

  const totalPages = Math.ceil(products?.products?.length / limit);

  const handleChange = (value, page) => {
    let currentPage = page - 1;
    setPage(page);
    setSkip(!search ? currentPage * limit : 0);
  };

  return (
    <div className="w-full p-10">
      <div className="grid grid-cols-4 gap-4 mb-16">
        {!isLoading && !isFetching ? (
          data?.products?.length > 0 ? (
            data?.products?.map(({ category, thumbnail, id }) => {
              return (
                <div
                  key={id}
                  className="w-full bg-black relative group h-[500px] cursor-pointer shadow-lg rounded-sm"
                >
                  <img
                    src={thumbnail}
                    className="h-full w-full object-contain"
                  />

                  <div className="h-full flex gap-2 justify-center items-center text-xl text-white w-full group-hover:opacity-100 bg-opacity-60 duration-500 transition-all inset-0 z-40 absolute opacity-0 bg-green-800">
                    <h1 className="hover:text-green-800 hover:font-serif hover:font-bold">
                      {category}
                    </h1>
                  </div>
                </div>
              );
            })
          ) : (
            Array(4)
              .fill(4)
              .map((p, index) => {
                return (
                  <div
                    key={index}
                    className="h-[500px] bg-gradient-to-r to-gray-400 from-white border  via-black animate-pulse rounded-sm flex justify-center items-center"
                  ></div>
                );
              })
          )
        ) : (
          <div className="w-full bg-black text-white flex justify-center items-center text-xl col-span-4 relative group h-[500px] cursor-pointer shadow-lg rounded-sm">
            <h1>No Results Found...!!</h1>
          </div>
        )}
      </div>
      <div className="full flex justify-center">
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Paginationss;
