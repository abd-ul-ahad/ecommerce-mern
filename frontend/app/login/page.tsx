import Link from "next/link";

const Login = () => {
  return (
    <div className="bg-[var(--light-pink)] flex justify-center items-center py-16">
      <div className="flex justify-evenly w-full items-start">
        {/* login */}
        <div>
          <h1 className="font-bold text-2xl mb-10">LOGIN</h1>
          <div className="space-y-6 flex flex-col justify-center items-center">
            <div className="space-y-2">
              <p className="text-sm tracking-widest">
                Incorrect email or password.
              </p>
              <p className="tracking-widest font-semibold text-sm">EMAIL</p>
              <input
                className="px-4 py-2 text-lg focus:outline-1 focus:outline-[black]"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <p className="tracking-widest font-semibold text-sm">PASSWORD</p>
              <input
                className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                type="password"
              />
            </div>
            <div className="justify-center items-center flex flex-col space-y-3">
              <button className="bg-[var(--dark)] text-[white] text-sm font-bold tracking-widest py-3 px-28 hover:bg-[white] hover:text-[var(--dark)] group-hover:block">
                Login
              </button>
              <Link href="/">
                <p className="underline text-xs font-semibold">
                  FORGET PASSWORD
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* signup */}
        <div>
          <div>
            <h1 className="font-bold text-2xl mb-10">SIGN UP</h1>

            <div className="space-y-6 flex flex-col justify-start items-center">
              <div className="space-y-2">
                <p className="text-sm tracking-widest mb-7">
                  We never save credit card information.
                </p>
                <p className="text-sm tracking-widest w-1/2">
                  Registering makes checkout fast and easy and saves your order
                  information in your account.
                </p>
                <p className="text-sm tracking-widest">
                  Incorrect email or password.
                </p>
                <p className="tracking-widest font-semibold text-sm">FIRST NAME</p>
                <input
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="email"
                />
                <p className="tracking-widest font-semibold text-sm">LAST NAME</p>
                <input
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="email"
                />
                <p className="tracking-widest font-semibold text-sm">EMAIL</p>
                <input
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="email"
                />
                <p className="tracking-widest font-semibold text-sm">
                  CONFIRM PASSWORD
                </p>
                <input
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="password"
                />
                <p className="tracking-widest font-semibold text-sm">
                  PASSWORD
                </p>
                <input
                  className="px-4 py-2 text-lg focus:outline-10 focus:outline-[var(--dark)]"
                  type="password"
                />
              </div>
              <div className="justify-start w-full items-start flex flex-col space-y-3">
                <button className="bg-[var(--dark)] text-[white] text-sm font-bold tracking-widest py-3 px-28 hover:bg-[white] hover:text-[var(--dark)] group-hover:block">
                  SIGN UP
                </button>
                <p className="text-xs w-1/2 font-semibold">
                  By creating an account, you agree to our <span className="underline"> Terms of Use</span> and
                  <span className="underline">Privacy Policy </span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
