import { Star, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Alicia",
    tour: "Mycenae Tour",
    rating: 5,
    text: "We loved our trip! Visiting Mycenae was a lifelong dream of my 74yr old father and booking this day trip was completely fulfilling. Our guide Alex was wonderful. He was flexible with timing and the activities included. He gave us great information about the history... For lunch he even took us on a side trip to a different town to make sure we could get authentic gyros!",
  },
  {
    id: 2,
    author: "Sherry",
    tour: "Accessible Tour Athens",
    rating: 5,
    text: "My tour guide, Marinos, was fantastic! He was very kind, helpful and informative and wanted me to see the very best of Athens which I believe that we did! I would highly recommend Marinos for anyone who has mobility issues as he will respect your limitations but also make sure that you can see everything that you are able to see!",
  },
  {
    id: 3,
    author: "Swamy Ramesh",
    tour: "Olympia Tour",
    rating: 5,
    text: "Alex was very personable a great guide. He kept us and kids engaged with pleasant conversations including Greece's history. He was prompt to pick us up from our place. Provided information on quite a few things about shopping places in Athens. Took us to a beautiful place that was not on the agenda. We greatly enjoyed the trip!",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#EAE8DF] w-full px-4 md:px-8 py-20 text-[#2B3D25] font-sans">
      <div className="max-w-450 mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 opacity-60">
              <MessageCircle className="w-3 h-3 fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Reviews
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              What our clients say about us
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-[#2B3D25]/20 flex items-center justify-center hover:bg-[#2B3D25]/5 transition-colors">
              <ChevronLeft strokeWidth={1.5} className="w-5 h-5 opacity-70" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center hover:bg-opacity-90 transition-colors">
              <ChevronRight strokeWidth={1.5} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- REVIEWS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#E6E3D2] p-8 rounded-2xl flex flex-col justify-between min-h-80 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars & Text */}
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C8A051] text-[#C8A051]"
                    />
                  ))}
                </div>

                <p className="text-sm leading-relaxed opacity-70">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-[#2B3D25]/10">
                <p className="font-bold text-sm mb-0.5">{review.author}</p>
                <p className="text-xs opacity-50 uppercase tracking-wide">
                  {review.tour}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
