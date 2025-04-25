import {React,useState} from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import EditStudent from './EditStudent';

const StudentTable = ({ students, onUpdate, onDelete }) => {
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditModalShow(true);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Year</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.studentId}</td>
              <td>{student.firstName} {student.lastName}</td>
              <td>{student.email}</td>
              <td>{formatDate(student.dob)}</td>
              <td>{student.department}</td>
              <td>{student.enrollmentYear}</td>
              <td>
                <Badge bg={student.isActive ? "success" : "secondary"}>
                  {student.isActive ? "Active" : "Inactive"}
                </Badge>
              </td>
              <td>
                <Button 
                  variant="warning" 
                  size="sm" 
                  onClick={() => handleEditClick(student)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => onDelete(student._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedStudent && (
        <EditStudent
          show={editModalShow}
          onHide={() => setEditModalShow(false)}
          student={selectedStudent}
          onSave={onUpdate}
        />
      )}
    </>
  );
};

export default StudentTable;