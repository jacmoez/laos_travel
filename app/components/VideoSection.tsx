// components/VideoSection.tsx
export default function VideoSection() {
  return (
    <div className="w-full bg-white py-12">
      <div className="w-full px-4 md:px-8">
        <h2 className="text-3xl font-bold text-[#2E7D32] mb-8 text-center">
          Discover Laos Through Video
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Video 1 */}
          <div className="flex-1 min-w-0">
            <div className="relative w-full aspect-video min-h-[280px] md:min-h-[400px] rounded-xl shadow-lg overflow-hidden bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Qjnjg4_TgXY?autoplay=1&mute=1&loop=1&playlist=Qjnjg4_TgXY"
                title="Laos Travel Video 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Video 2 */}
          <div className="flex-1 min-w-0">
            <div className="relative w-full aspect-video min-h-[280px] md:min-h-[400px] rounded-xl shadow-lg overflow-hidden bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5EhJtgttLyI?autoplay=1&mute=1&loop=1&playlist=5EhJtgttLyI"
                title="Laos Travel Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}