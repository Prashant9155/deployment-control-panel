function StatsCard() {
  const stats = [
    {
      title: "Deployments",
      value: "128+",
      color: "text-blue-400",
    },
    {
      title: "Docker Containers",
      value: "24",
      color: "text-green-400",
    },
    {
      title: "Queue Jobs",
      value: "89",
      color: "text-yellow-400",
    },
    {
      title: "Lambda Invocations",
      value: "310+",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur-xl"
        >
          <p className="text-slate-400 text-sm">
            {item.title}
          </p>

          <h3
            className={`text-3xl font-bold mt-2 ${item.color}`}
          >
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default StatsCard;