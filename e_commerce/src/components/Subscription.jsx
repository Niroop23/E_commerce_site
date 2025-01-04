import React from "react";

const Subscription = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };
  return (
    <>
      <div className="py-10 bg-slate-300 mt-10 ">
        <section>
          <p className="text-center text-2xl font-semibold text-gray-800 pb-1">
            Subscribe to our newsletter
          </p>
          <p
            className="text-center text-gray-500 
            text-sm
            font-light
            pb-5 
            w-2/3
            mx-auto
            
          "
          >
            Get the latest news and updates from us
          </p>
        </section>
        <form
          onSubmit={onSubmitHandler}
          action="/"
          className="flex flex-col sm:flex-row justify-center items-center gap-2 "
        >
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 max-w-[95%]"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 
            rounded-lg
            hover:bg-gray-800
            transition-all
            duration-300
            ease-in-out
            "
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Subscription;
