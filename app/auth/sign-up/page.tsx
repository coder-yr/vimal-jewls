import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
         <Image
                     src="/logo.png"
                     alt="Vimal Jewellers Logo"
                     width={60}
                     height={60}
                     className="object-cover h-auto mix-blend-difference mx-auto"
                     // Adjust object position to show SRK
                     priority
                   />
                   <p className="text-xs text-gray-600">VIMAL JEWELLERS</p>
          <h2 className="mt-6 text-2xl font-semibold text-gray-800">
            Create Your Account
          </h2>
        </div>
        <form className="space-y-6">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#009999] focus:ring-[#009999]"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#009999] focus:ring-[#009999]"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#009999] focus:ring-[#009999]"
            />
          </div>
          <div>
            <Label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[#009999] focus:ring-[#009999]"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-md bg-[#009999] py-2 text-lg font-semibold text-white hover:bg-[#007a7a]"
          >
            Sign Up
          </Button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          {"Already have an account? "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-[#009999] hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
