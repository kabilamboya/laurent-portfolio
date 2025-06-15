// src/components/OngoingProjects.js
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const ongoing = [
  {
    title: 'AI Dholuo Chatbot',
    desc: 'Developing an advanced chatbot using the Dholuo language to bridge digital gaps.',
    value: 20,
    color: '#00C49F',
  },
  {
    title: 'Dholuo LLM',
    desc: 'Building a Large Language Model tailored for the Luo-speaking developer community.',
    value: 25,
    color: '#FFBB28',
  },
  {
    title: 'Juicy Chills Mobile App',
    desc: 'Creating a Flutter-based mobile solution for managing street vendor sales and delivery.',
    value: 15,
    color: '#FF8042',
  },
  {
    title: 'O!clok Store',
    desc: 'Developing a multi-tenant E-commerce platform for vendors to sell independently.',
    value: 30,
    color: '#8884d8',
  },
  {
    title: 'Digital Mockups & Templates',
    desc: 'Offering free downloadable cyber assets and templates through an online portal.',
    value: 10,
    color: '#a4de6c',
  },
];

export default function OngoingProjects() {
  return (
    <section className="py-5 bg-secondary text-white">
      <div className="container">
        <h2 className="mb-4 text-center" style={{ color: 'gold' }}>CURRENT PROJECTS</h2>

        <div className="row">
          {/* Cards */}
          <div className="col-lg-7">
            <div className="row">
              {ongoing.map((proj, idx) => (
                <div className="col-sm-6 mb-4" key={idx}>
                  <div className="card h-100 bg-dark text-white shadow-sm border-0">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title text-warning">{proj.title}</h5>
                      <p className="card-text">{proj.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pie Chart */}
          <div className="col-lg-5">
            <div
              style={{
                background: '#222',
                padding: '1rem',
                borderRadius: '1rem',
                height: '100%',
              }}
            >
              <h5 className="text-center mb-3 text-warning">Project Focus Distribution</h5>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ongoing}
                    dataKey="value"
                    nameKey="title"
                    outerRadius={100}
                    label={({ title }) => title}
                  >
                    {ongoing.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
