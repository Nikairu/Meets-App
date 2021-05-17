import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.toUpperCase().includes(genre.toUpperCase())
        ).length;
        return { name: genre, value };
      });
      return data.filter(({ value }) => value > 0);
    };
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#790c5a"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          /* label={({ name, percent }) => {
            return (percent * 100).toFixed(0) !== "0"
              ? `${name} ${(percent * 100).toFixed(0)}%`
              : "";
          }} */
        ></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
