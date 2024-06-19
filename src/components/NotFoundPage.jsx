const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Home</a>
    </div>
  );
};

export default NotFoundPage;