"use client";

const stats = [
  {
    id: 1,
    title: "Delegates",
    value: "500+",
    description: "Passionate participants",
  },
  {
    id: 2,
    title: "Universities",
    value: "50+",
    description: "Leading institutions",
  },
  {
    id: 3,
    title: "Teams",
    value: "100+",
    description: "Innovative teams",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center py-20 lg:px-4 px-4">
      <div className="max-w-3xl w-full ">
        <div className="space-y-8">
          {" "}
          <div className="flex items-center justify-between lg:gap-4 gap  backdrop-blur-md rounded-xl border border-white/10 bg-gradient-to-br from-[#a280ec]/10 via-[#b146e4]/10 to-[#18d6ed]/10 p-4 lg:p-8">
            {stats.map((stat, index) => (
              <div key={stat.id} className="flex-1 relative text-center px-2">
                <div className="space-y-2">
                  <span className="block text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#a280ec] via-[#d30de5] to-[#18d6ed] text-transparent bg-clip-text">
                    {stat.value}
                  </span>
                  <h3 className="text-xs sm:text-lg lg:text-xl font-semibold text-white">
                    {stat.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-white/80">
                    {stat.description}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 sm:h-20 w-[1px] bg-gradient-to-b from-[#a280ec] via-[#d30de5] to-[#18d6ed]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
