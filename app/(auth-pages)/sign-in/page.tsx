import { signInAction } from "@/app/actions";
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

export default async function Login() {
  return (
    <form className="flex flex-col w-[30%] rounded-3xl bg-[#28A745] text-white px-10 py-12 mx-auto">
      <h1 className="text-2xl font-medium">Sign in</h1>
      <p className="text-sm">
        Don't have an account?{" "}
        <Link className="font-medium underline" href="/sign-up">
          Sign up
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
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Password</Label>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          autoComplete="new-password"
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
        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          Sign in
        </SubmitButton>
      </div>
    </form>
  );
}
