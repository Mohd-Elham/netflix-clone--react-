import hero_bg from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";

const Hero = () => {
  return (
    <>
       <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <img
                src={hero_bg}
                alt="Hero Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-24">
                {/* Title Image */}
                <div className="mb-4 md:mb-6">
                    <img 
                        src={hero_title} 
                        alt="Hero Title" 
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                    />
                </div>

                {/* Description Text */}
                <p className="text-white text-sm sm:text-base md:text-lg font-medium max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-6 md:mb-8 leading-relaxed">
                    Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                        Play
                    </button>
                    <button className="bg-gray-600/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-600/90 transition-colors flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        More Info
                    </button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Hero;
