import { Calendar } from "lucide-react";

const schedule = [
  {
    class: "Mat Pilates",
    day: "Monday & Wednesday",
    time: "9:00 AM",
  },
  {
    class: "Reformer Flow",
    day: "Tuesday & Thursday",
    time: "10:30 AM",
  },
  {
    class: "Core & More",
    day: "Wednesday & Friday",
    time: "5:30 PM",
  },
  {
    class: "Advanced Practice",
    day: "Saturday",
    time: "11:00 AM",
  },
];

const ScheduleSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-center font-serif text-3xl font-medium md:text-4xl">
            Class Schedule
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm"
              >
                <Calendar className="h-6 w-6 text-moss" />
                <div>
                  <h3 className="font-medium">{item.class}</h3>
                  <p className="text-charcoal/80">
                    {item.day} - {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;