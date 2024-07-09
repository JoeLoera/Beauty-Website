const Services = () => {
  return (
    <div
      className="pt-1 pb-1"
      style={{
        backgroundColor: "rgba(217,198,188)",
        color: "#FFFFFF",
        backgroundImage:
          "linear-gradient(45deg, rgba(217,198,188) 12.5%, transparent 12.5%, transparent 50%, rgba(217,198,188) 50%, rgba(217,198,188) 62.5%, transparent 62.5%, transparent), linear-gradient(45deg, rgba(217,198,188) 12.5%, transparent 12.5%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 62.5%, transparent 62.5%, transparent)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-3xl font-bold mb-10">Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-5">Service 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              suscipit, nunc sit amet dictum rutrum, nunc mauris malesuada nisi,
              ac sagittis nulla urna sit amet est.
            </p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-5">Service 2</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              suscipit, nunc sit amet dictum rutrum, nunc mauris malesuada nisi,
              ac sagittis nulla urna sit amet est.
            </p>
          </div>
          <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-5">Service 3</h2>
            <p className="text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
