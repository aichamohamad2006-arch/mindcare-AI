// This is the Patient Login page of our application.
export default function PatientLogin() {
  return (
    <main className="login-page">
      {/* 
        This is the white login card.
        Later, we will divide the page into:
        - a beautiful mental-health image
        - the login form */}
      <section className="login-card">
        {/* Hospital name */}
        <p className="hospital-name">
          JAMOT HOSPITAL
        </p>
        {/* Platform name */}
        <p className="platform-name">
          Mental Health Support Platform
        </p>
        {/* Main login title */}
        <h1>
          Patient Login
        </h1>
        {/* Short welcome message */}
        <p className="welcome-text">
          Welcome back. Please sign in to access your
          mental health support services.
        </p>

      </section>

    </main>
  );
}