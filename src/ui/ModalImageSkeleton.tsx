const ModalImageSkeleton = () => {
  return (
    <div className="bg-gray-200 h-96 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      <div className="px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gray-300 h-10 w-10 sm:h-12 sm:w-12"></div>
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="h-4 bg-gray-300 w-24 sm:w-32"></div>
            <div className="h-3 bg-gray-300 w-20 sm:w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalImageSkeleton;
