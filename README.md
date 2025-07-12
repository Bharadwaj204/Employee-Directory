# Employee Directory Web Interface

A simple employee directory web application built with HTML, CSS, and JavaScript for the AJACKUS Company assignment.

## Live Demo

**🌐 [View Live Demo](https://employee-directory35.netlify.app/)**

## Features

- Display list of employees with their details
- Add new employees
- Edit existing employee information
- Delete employees with confirmation
- Search employees by name or email
- Filter employees by department and role
- Sort employees by first name and department
- Pagination (10, 25, 50, 100 items per page)
- Responsive design for mobile and desktop

## Project Structure

```
Employee Directory/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # CSS styles
├── js/
│   ├── data.js         # Sample employee data
│   └── app.js          # JavaScript functionality
└── README.md           # This file
```

## How to Run

1. Download all the files
2. Open `index.html` in a web browser
3. The application will load with sample employee data

**Or visit the live demo: [https://employee-directory35.netlify.app/](https://employee-directory35.netlify.app/)**

## Employee Information

Each employee has:
- Employee ID
- First Name
- Last Name
- Email
- Department (HR, IT, Marketing, Finance, Sales)
- Role (Manager, Developer, Analyst, Coordinator, Specialist)

## How to Use

### Viewing Employees
- All employees are displayed in a list format
- Use pagination to navigate through pages
- Change number of items per page using the dropdown

### Adding Employees
1. Click "Add Employee" button
2. Fill in all required fields
3. Click "Save Employee"

### Editing Employees
1. Click "Edit" button on any employee
2. Modify the information
3. Click "Save Employee"

### Deleting Employees
1. Click "Delete" button on any employee
2. Confirm deletion in the popup
3. Employee will be removed

### Searching
- Type in the search box to find employees by name or email
- Search works in real-time

### Filtering
1. Click "Filter" button
2. Enter filter criteria (First Name, Department, Role)
3. Click "Apply Filter"
4. Click "Clear All" to remove filters

### Sorting
- Use the "Sort by" dropdown
- Choose First Name or Department
- Select empty option to remove sorting

## Sample Data

The application comes with 10 sample employees:
- John Doe (IT Developer)
- Jane Smith (HR Manager)
- Bob Johnson (Marketing Analyst)
- Alice Brown (Finance Specialist)
- Charlie Wilson (Sales Coordinator)
- And 5 more employees...

## Browser Support

Works in:
- Chrome
- Firefox
- Safari
- Edge

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- No external libraries or frameworks

## Features Summary

| Feature | Description |
|---------|-------------|
| CRUD Operations | Add, view, edit, delete employees |
| Search | Search by name or email |
| Filter | Filter by department and role |
| Sort | Sort by first name and department |
| Pagination | Navigate through pages |
| Validation | Form validation with error messages |
| Responsive | Works on mobile and desktop |

## Challenges Faced

- Managing state between search, filter, and pagination
- Implementing form validation
- Making the design responsive
- Handling user interactions properly

## What I Would Improve

- Add data persistence (local storage)
- Add export functionality
- Improve the design
- Add more validation rules
- Add bulk operations

This project demonstrates basic front-end development skills with HTML, CSS, and JavaScript.

**🔗 [Live Demo](https://employee-directory35.netlify.app/)**
