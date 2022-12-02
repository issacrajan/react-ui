import React from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
  const fetchData = async () => {
    const resp = await fetch('/api/v1');
    const data = await resp.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h1>Dashboard</h1>;
};

export default Dashboard;
