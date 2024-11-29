<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1 align="center">Next.js Role-Based Authentication Starter</h1>
  <p align="center">
    This project is a starter kit for building secure Next.js applications with a role-based authentication system.
    It leverages Supabase for managing users and roles with a simple and clean interface.
  </p>

  <h2>Features</h2>
  <ul>
    <li><strong>Authentication System:</strong>
      <ul>
        <li>Secure user registration, login, and logout using <a href="https://supabase.com/auth">Supabase Auth</a>.</li>
        <li>Role selection during registration (e.g., Admin, User, Moderator).</li>
      </ul>
    </li>
    <li><strong>Authorization:</strong>
      <ul>
        <li>Role-based access control (RBAC) implemented to restrict access based on user roles.</li>
        <li>Specific pages and actions limited to designated roles.</li>
      </ul>
    </li>
    <li><strong>Tech Stack:</strong>
      <ul>
        <li>Frontend: <a href="https://nextjs.org">Next.js</a></li>
        <li>Backend: <a href="https://supabase.com">Supabase</a></li>
        <li>Styling: <a href="https://tailwindcss.com">Tailwind CSS</a></li>
      </ul>
    </li>
  </ul>

  <h2>Pages</h2>
  <ul>
    <li><strong>Login:</strong>
      <p>Users can log in by providing their email, password, and selecting their role from a dropdown.</p>
    </li>
    <li><strong>Registration:</strong>
      <p>New users can register by providing their email, password, and selecting a role during the signup process.</p>
    </li>
    <li><strong>Welcome:</strong>
      <p>A simple page displaying a welcome message and minimal user information based on their role.</p>
    </li>
  </ul>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js installed (v18+ recommended)</li>
    <li>A Supabase account and project</li>
    <li>Basic knowledge of Next.js and Supabase</li>
  </ul>

  <h3>Setup</h3>
  <ol>
    <li><strong>Clone the Repository:</strong>
      <pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name</code></pre>
    </li>
    <li><strong>Install Dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Configure Environment Variables:</strong>
      <p>Rename <code>.env.example</code> to <code>.env.local</code> and update the following values:</p>
      <pre><code>NEXT_PUBLIC_SUPABASE_URL=[YOUR_SUPABASE_PROJECT_URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR_SUPABASE_ANON_KEY]</code></pre>
      <p>You can find these in your Supabase project's API settings.</p>
    </li>
    <li><strong>Set Up Supabase Database:</strong>
      <p>Add a <code>roles</code> column to the <code>auth.users</code> table to store user roles:</p>
      <pre><code>ALTER TABLE auth.users
ADD COLUMN roles TEXT DEFAULT 'User';</code></pre>
    </li>
    <li><strong>Run the Development Server:</strong>
      <pre><code>npm run dev</code></pre>
      <p>Visit <a href="http://localhost:3000">http://localhost:3000</a> to see the application in action.</p>
    </li>
  </ol>

  <h2>Role-Based Access Control (RBAC) Implementation</h2>
  <ul>
    <li><strong>Admin:</strong> Full access to all resources, including user management and content moderation.</li>
    <li><strong>Moderator:</strong> Access to specific moderation tools.</li>
    <li><strong>User:</strong> Limited access to personal data and basic features.</li>
  </ul>
  <p>RBAC is enforced via middleware that checks the user's role before allowing access to protected routes.</p>

  <h2>Usage</h2>
  <ol>
    <li><strong>Registration and Login:</strong>
      <p>Users can sign up and log in using the forms on their respective pages.</p>
    </li>
    <li><strong>Role Assignment:</strong>
      <p>Roles can be assigned or updated directly in Supabase.</p>
    </li>
    <li><strong>Access Control:</strong>
      <p>Pages and actions are secured based on user roles. Unauthorized users are redirected or shown an error message.</p>
    </li>
  </ol>

  <h2>Deployment</h2>
  <p>To deploy the application to <a href="https://vercel.com">Vercel</a>:</p>
  <ol>
    <li>Push your code to GitHub.</li>
    <li>Deploy the repository to Vercel using the Vercel dashboard.</li>
    <li>Ensure the environment variables are configured in the Vercel project settings.</li>
  </ol>

  <h2>Feedback and Contributions</h2>
  <p>If you encounter issues or have feature requests, feel free to open an issue or submit a pull request.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>
</body>
</html>
