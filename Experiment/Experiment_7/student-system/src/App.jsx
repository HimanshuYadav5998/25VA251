import React from 'react';

function App() {
  const students = [
    { id: 1, name: 'Monika', course: 'B.Tech Data Science', marks: 95 },
    { id: 2, name: 'Rahul', course: 'B.Tech CS', marks: 88 },
    { id: 3, name: 'Sneha', course: 'B.Tech IT', marks: 92 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans p-6 text-center">
      <p className="text-gray-500 text-sm tracking-wide mb-2">Experiment 07</p>
      <h1 className="text-4xl md:text-5xl font-semibold text-blue-500 tracking-tight mb-12">
        Student Information System
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {students.map((student) => (
          <div 
            key={student.id} 
            className="border-2 border-green-600 rounded-xl p-6 bg-gray-50/30 shadow-md transition-shadow duration-300 hover:shadow-lg flex flex-col justify-center items-center min-h-[220px]"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Student Details
            </h2>
            <div className="space-y-1.5 text-center text-gray-600 font-medium">
              <p><span className="font-bold text-gray-700">Name:</span> {student.name}</p>
              <p><span className="font-bold text-gray-700">Course:</span> {student.course}</p>
              <p><span className="font-bold text-gray-700">Marks:</span> {student.marks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;