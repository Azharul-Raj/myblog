
function Banner() {
  return (
      <div className="flex flex-col items-center lg:flex-row lg:justify-between mx-10 pb-5">
          <div className="">
              <h3 className="text-5xl lg:text-6xl font-bold">MB Softech Consultants Blog</h3>
              <p className="text-xl mt-5 font-semibold"> Welcome to <span className="underline decoration-4 decoration-cyan-200">Regular</span> Blog</p>
          </div>
          <div className="lg:w-1/3">
              <p className="text-gray-600 lg:text-xl">New coming up features,New technology's updates and much more blog post's are coming in</p>
          </div>
    </div>
  )
}

export default Banner