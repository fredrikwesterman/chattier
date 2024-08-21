const LoginSuccess = () => {
  const jwt = localStorage.getItem("jwtToken");
  const decodedJwt = JSON.parse(atob(jwt.split(".")[1]));
  return (
    <div role="alert" className="alert alert-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current text-primary"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Welcome back {decodedJwt.user}!</span>
    </div>
  );
};

export default LoginSuccess;
