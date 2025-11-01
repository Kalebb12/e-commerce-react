import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

export function SignIn() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState("signIn");
  return (
    <div className="h-screen flex items-center justify-center">
      <form
        className="flex flex-col shadow-md w-42 gap-2 items-center"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          void signIn("password", formData);
        }}
      >
        <input
          name="email"
          className="border p-2 rounded-md w-full"
          placeholder="Email"
          type="text"
        />
        <input
          name="password"
          className="border p-2 rounded-md w-full"
          placeholder="Password"
          type="password"
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
