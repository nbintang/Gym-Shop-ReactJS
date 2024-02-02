import React from "react";

export default () => {
  const forum = [
    {
      login: "Username",
    },
    {
      login: "Password",
    },
  ];

  const orLogin = [
    {
      icon: "assets/img/brand/github.svg",
      text: "Github",
    },
    {
      icon: "assets/img/brand/facebook.svg",
      text: "Facebook",
    },
    {
      icon: "assets/img/brand/google.svg",
      text: "Google",
    },
  ];

  return (
    <>
      <section className="h-screen w-full min-w-0  font-archivo flex gap-6 items-center flex-wrap">
        {/* <div className=" hidden md:block max-w-[700px] ">
          <img
            src="assets/img/imgwallpaper/login.jpg"
            alt=""
            className=""
          />
        </div> */}
       <div className="w-full flex justify-center min-w-0">
       <div class="flex min-h-0 flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-10 w-auto cursor-pointer"
              src="https://cdn.gymshark.com/images/branding/gs-icon-black.svg"
              alt="Your Company"
            />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-semibold text-gray-500 hover:underline font-body"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p class="mt-10 text-center text-sm text-black font-body">
              Not a member?
              <a
                href="#"
                class="font-semibold leading-6 text-gray-500 hover:underline"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
       </div>
      </section>
    </>
  );
};
