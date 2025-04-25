import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Card className="text-center mt-5">
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Card.Title>Student Management System</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">MERN Stack Application</Card.Footer>
      </Card>
    </div>
  );
};

export default Home;