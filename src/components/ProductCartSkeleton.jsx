import React from 'react';

const ProductCartSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      {/* Image */}
      <div className="h-52 w-full bg-gray-200" />

      <div className="p-4 space-y-3">
        {/* Brand */}
        <div className="h-3 w-1/3 rounded bg-gray-200" />

        {/* Title */}
        <div className="h-4 w-3/4 rounded bg-gray-200" />

        {/* Rating row */}
        <div className="flex gap-2">
          <div className="h-3 w-16 rounded bg-gray-200" />
          <div className="h-3 w-10 rounded bg-gray-200" />
        </div>

        {/* Price */}
        <div className="h-5 w-1/3 rounded bg-gray-200" />

        {/* Button */}
        <div className="h-10 w-full rounded-lg bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCartSkeleton;