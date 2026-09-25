import React from 'react';

const Filter = () => {
  return (
    <div className='mt-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-4 md:px-8'>
      {/* Left side filters (Responsive Grid/Flex on mobile and desktop) */}
      <div className="flex flex-wrap gap-3 items-center w-full lg:w-auto">
        {/* Type Filter */}
        <select name='type' id='type' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 border border-gray-200 focus:outline-none'>
          <option value="">Filter By Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        {/* Min Price */}
        <input 
          type='number' 
          name='min' 
          placeholder='Min price' 
          className='text-xs rounded-2xl px-4 py-2 w-24 md:w-28 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50' 
        />

        {/* Max Price */}
        <input 
          type='number' 
          name='max' 
          placeholder='Max price' 
          className='text-xs rounded-2xl px-4 py-2 w-24 md:w-28 ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-50' 
        />

        {/* Size Filter */}
        <select name='size' id='size' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 border border-gray-200 focus:outline-none'>
          <option value="">Size</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="xl">Extra Large</option>
        </select>

        {/* Color Filter */}
        <select name='color' id='color' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 border border-gray-200 focus:outline-none'>
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>

        {/* Category Filter */}
        <select name='category' id='category' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 border border-gray-200 focus:outline-none'>
          <option value="">Category</option>
          <option value="fabrics">Fabrics</option>
          <option value="prints">Prints</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* All Filters */}
        <select name='allFilters' id='allFilters' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 border border-gray-200 focus:outline-none'>
          <option value="">All Filters</option>
          <option value="sale">On Sale</option>
          <option value="featured">Featured</option>
        </select>
      </div>

      {/* Right side sorting */}
      <div className="w-full lg:w-auto flex justify-end">
        <select name='sort' id='sort' className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 border border-gray-200 focus:outline-none w-full lg:w-auto'>
          <option value="">Sort By</option>
          <option value="asc price">Price: Low to High</option>
          <option value="desc price">Price: High to Low</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;