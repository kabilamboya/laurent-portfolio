import React from 'react';

const techSkills = [
  { name: 'Analytical', value: 80, color: '#00C49F' },
  { name: 'Logic', value: 85, color: '#FFBB28' },
  { name: 'Problem Solving', value: 89, color: '#FF8042' },
  { name: 'Organization', value: 90, color: '#8884d8' },
  { name: 'Management', value: 75, color: '#0088FE' },
];

const softSkills = [
  { name: 'Communication', value: 88, color: '#8dd1e1' },
  { name: 'Creativity', value: 82, color: '#a4de6c' },
  { name: 'Adaptability', value: 80, color: '#d0ed57' },
  { name: 'Time Management', value: 84, color: '#ffc658' },
  { name: 'Leadership', value: 78, color: '#d8854f' },
];

const Bar = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{
      display: 'flex',
      height: '20px',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '0.5rem',
      border: '1px solid #444',
    }}>
      {data.map((item, i) => (
        <div
          key={i}
          style={{
            width: `${(item.value / total) * 100}%`,
            backgroundColor: item.color,
          }}
          title={`${item.name}: ${item.value}%`}
        />
      ))}
    </div>
  );
};

const Legend = ({ data, label }) => (
  <>
    <h5 style={{ color: '#fff', marginTop: '1rem' }}>{label}</h5>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#ccc' }}>
      {data.map((item, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: item.color,
          }}></div>
          <span>{item.name} ({item.value}%)</span>
        </div>
      ))}
    </div>
  </>
);

export default function pungulu() {
  return (
    <div style={{
      backgroundColor: '#222',
      padding: '2rem',
      borderRadius: '1rem',
      maxWidth: '700px',
      margin: 'auto',
      color: '#fff'
    }}>
      <h3 className="text-center mb-4">Skills Breakdown</h3>

      <p style={{ margin: '0 0 0.5rem' }}>Technical Skills</p>
      <Bar data={techSkills} />
      <Legend data={techSkills} label="Technical Skills" />

      <p style={{ margin: '1.5rem 0 0.5rem' }}>Soft Skills</p>
      <Bar data={softSkills} />
      <Legend data={softSkills} label="Soft Skills" />
    </div>
  );
}
