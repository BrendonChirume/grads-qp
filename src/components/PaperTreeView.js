import * as React from 'react';
import PropTypes from 'prop-types';
import ListTree from './ListTree';

const data = [
  {
    'Year 1': [
      {
        name: 'Semester 1',
        children: [
          'Linear Algebra',
          'Calculas',
          'Infomation Management',
          'Communication Skills',
          'Electronic Commerce',
          'Database Systems'
        ]
      },
      {
        name: 'Semester 2',
        children: [
          'Descrete Mathematics',
          'Data Mining',
          'Introduction to Programming Consepts in Python',
          'Business Information Systems',
          'Applied Statistics',
          'Data Visualisation'
        ]
      }
    ]
  },
  {
    'Year 2': [
      {
        name: 'Semester 1',
        children: [
          'Technopreneureship',
          'Research Methods',
          'Data Analysis & Simulation',
          'Statistical Programming',
          'Application Development',
          'Data Communication & Network'
        ]
      },
      {
        name: 'Semester 2',
        children: [
          'Decision Support Systems',
          'Parallel & Distributed Processing',
          'Data Science Project',
          'Information Security & Auditing',
          'Molecular Biology',
          'Data Analytics',
          'Group Project'
        ]
      }
    ]
  }
];

export default function PaperTreeView() {
  const handleSelect = (event, nodeIds) => {};

  return data.map((node, index) => <ListTree key={index} node={node} />);
}

PaperTreeView.propTypes = {};
