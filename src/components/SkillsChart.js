import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const ongoingProjects = [
  { name: 'AI Dholuo Chatbot', value: 20, color: '#00C49F' },
  { name: 'Dholuo LLM', value: 25, color: '#FFBB28' },
  { name: 'Juicy Chills App', value: 15, color: '#FF8042' },
  { name: 'O!clok Store', value: 30, color: '#8884d8' },
  { name: 'Mockup/Templates', value: 10, color: '#a4de6c' },
];

const OngoingProjectsChart = () => {
  return (
    <div style={{
      background: '#222',
      padding: '2rem',
      borderRadius: '1rem',
      color: '#fff',
      height: '100%',
    }}>
      <h3 className="text-center mb-4 text-warning">Ongoing Projects Breakdown</h3>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={ongoingProjects}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            label={({ name }) => name}
          >
            {ongoingProjects.map((entry, index) => (
              <Cell key={`project-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OngoingProjectsChart;
