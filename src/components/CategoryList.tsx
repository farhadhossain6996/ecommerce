import Image from 'next/image'
import Link from 'next/link'


const CategoryList = () => {
  // ডামি ডাটা, পরবর্তীতে আপনি API বা Database থেকে ডাটা আনতে পারবেন
  const categories = [
    { id: 1, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
    { id: 2, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
    { id: 3, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
    { id: 4, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
    { id: 5, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
    { id: 6, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
    { id: 7, name: 'Category Name', href: '/list2?cat=test', image: '/slider3.jpg' },
    { id: 8, name: 'Category Name', href: '/list?cat=test', image: '/slider3.jpg' },
  ]

  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className="flex gap-4 md:gap-8 w-max">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={category.href} 
            className='flex-shrink-0 w-[250px] sm:w-[280px] lg:w-[320px]'
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image 
                src={category.image} 
                alt={category.name} 
                fill 
                sizes='20vw' 
                className='object-cover'
              />
            </div>
            <h1 className='mt-8 font-light text-xl tracking-wide'>
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList