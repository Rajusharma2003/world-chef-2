/* eslint-disable react/prop-types */
const CarouselCard = ({ image, description, name }) => {
  return (
    <div className="h-80 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-6 md:mx-12 lg:mx-28 md:w-72 p-6 space-y-4">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img 
          className="object-cover w-full h-full" 
          src={image} 
          alt={name}
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-gray-700 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
