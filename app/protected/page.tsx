import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const { data: userRole } = await supabase
    .from("user_roles")
    .select("*")
    .eq("user_id", user?.id);
  return (
    <div className="flex-1 w-full h-[600px] flex flex-col items-center gap-12 text-white bg-gradient-to-b from-black to-purple-700 p-8">
      <div className="flex flex-col gap-4 items-start bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
        <h2 className="font-bold text-3xl mb-4 border-b-2 border-purple-500 pb-2">
          Your User Details
        </h2>
        <p className="text-lg">
          Hello{" "}
          <span className="font-semibold">{JSON.stringify(user?.email)}</span>,
          Welcome!
        </p>
        <p className="text-lg">
          Your role is{" "}
          <span className="font-semibold">{userRole?.[0]?.role}</span>
        </p>
      </div>
    </div>
  );
}
