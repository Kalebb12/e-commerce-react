import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState("signIn");
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="flex flex-col w-42 gap-2 items-start"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          signIn("password", formData);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="border p-2 rounded-md w-full"
          placeholder="Email"
          type="text"
          id="email"
        />
        <label htmlFor="pwd">Password</label>
        <input
          name="password"
          className="border p-2 rounded-md w-full"
          placeholder="Password"
          type="password"
          id="pwd"
        />
        <input name="flow" type="hidden" value={step} />
        <button
          type="submit"
          className="bg-black text-white px-3 py-2 rounded-md hover:shadow-md cursor-pointer"
        >
          {step === "signIn" ? "Sign in" : "Sign up"}
        </button>
        <button
          type="button"
          onClick={() => {
            setStep(step === "signIn" ? "signUp" : "signIn");
          }}
          className="text-blue-400 cursor-pointer"
        >
          {step === "signIn" ? "Sign up instead" : "Sign in instead"}
        </button>
      </form>
    </div>
  );
}
