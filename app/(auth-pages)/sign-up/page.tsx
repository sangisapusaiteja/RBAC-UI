import { signUpAction } from "@/app/actions";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default async function Signup() {
  return (
    <>
      <form className="flex flex-col w-[30%] rounded-3xl bg-[#6F42C1] text-white px-10 py-12 mx-auto">
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text">
          Already have an account?{" "}
          <Link className="font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            placeholder="Your Email"
            autoComplete="new-email"
            required
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <Label htmlFor="role">Role</Label>
          <Select name="role" required>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Sign up
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
