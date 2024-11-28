
export default async function Index() {
  return (
    <div className="size-full flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full py-4 text-white shadow-lg">
        <div className="mx-auto text-center">
          <h1 className="text-2xl font-bold">
            Welcome to the Project!
          </h1>
          <p className="mt-1 text-sm sm:text-base">
            Strengthen your skills in Authentication, Authorization, and RBAC to build secure, role-based systems. 🚀
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center gap-6 p-6 w-full">
        {/* <HeaderAuth /> */}
      </main>
    </div>
  );
}
