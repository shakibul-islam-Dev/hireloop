import { Card } from "@heroui/react";

const stats = [
  { label: "Active Jobs", value: "50K" },
  { label: "Companies", value: "12K" },
  { label: "Job Seekers", value: "2M" },
  { label: "Satisfaction Rate", value: "97%" },
];

export default function StatisticsSection() {
  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background Globe Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/globe.png')", backgroundSize: "100%" }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-bold mx-auto">
          Assisting over 15,000 job seekers <br /> find their dream positions.
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {stats.map((stat, index) => (
          <Card key={index} className="backdrop-blur-md">
            <Card className="p-8">
              <p className="text-white/60 text-sm mb-2">{stat.label}</p>
              <h3 className="text-white text-4xl font-bold">{stat.value}</h3>
            </Card>
          </Card>
        ))}
      </div>
    </section>
  );
}
