// Mock employee data
// In a real Freemarker application, this would be passed from the server
const mockEmployees = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@company.com', department: 'IT', role: 'Developer' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@company.com', department: 'HR', role: 'Manager' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@company.com', department: 'Marketing', role: 'Analyst' },
    { id: 4, firstName: 'Alice', lastName: 'Brown', email: 'alice.brown@company.com', department: 'Finance', role: 'Specialist' },
    { id: 5, firstName: 'Charlie', lastName: 'Wilson', email: 'charlie.wilson@company.com', department: 'Sales', role: 'Coordinator' },
    { id: 6, firstName: 'Diana', lastName: 'Davis', email: 'diana.davis@company.com', department: 'IT', role: 'Developer' },
    { id: 7, firstName: 'Edward', lastName: 'Miller', email: 'edward.miller@company.com', department: 'HR', role: 'Specialist' },
    { id: 8, firstName: 'Fiona', lastName: 'Garcia', email: 'fiona.garcia@company.com', department: 'Marketing', role: 'Manager' },
    { id: 9, firstName: 'George', lastName: 'Martinez', email: 'george.martinez@company.com', department: 'Finance', role: 'Analyst' },
    { id: 10, firstName: 'Helen', lastName: 'Robinson', email: 'helen.robinson@company.com', department: 'Sales', role: 'Coordinator' }
];

// Simulate Freemarker assignment
let employees = [...mockEmployees]; 