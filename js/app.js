// Employee Directory Application
// Main application logic for managing employees

class EmployeeDirectory {
    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.editingId = null;
        this.filteredEmployees = [...employees];
        this.sortField = '';
        this.sortDirection = 'asc';
        
        this.initializeApp();
    }

    initializeApp() {
        this.setupEventListeners();
        this.displayEmployees();
        this.updatePagination();
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Sort functionality
        document.getElementById('sort-select').addEventListener('change', (e) => {
            this.handleSort(e.target.value);
        });

        // Filter popup
        document.getElementById('filter-btn').addEventListener('click', () => {
            this.showFilterPopup();
        });

        document.getElementById('apply-filter').addEventListener('click', () => {
            this.applyFilters();
        });

        document.getElementById('clear-filter').addEventListener('click', () => {
            this.clearFilters();
        });

        document.getElementById('close-filter').addEventListener('click', () => {
            this.hideFilterPopup();
        });

        // Pagination
        document.getElementById('items-per-page').addEventListener('change', (e) => {
            this.itemsPerPage = parseInt(e.target.value);
            this.currentPage = 1;
            this.displayEmployees();
            this.updatePagination();
        });

        document.getElementById('prev-page').addEventListener('click', () => {
            this.previousPage();
        });

        document.getElementById('next-page').addEventListener('click', () => {
            this.nextPage();
        });

        // Add employee
        document.getElementById('add-employee-btn').addEventListener('click', () => {
            this.showAddForm();
        });

        // Form handling
        document.getElementById('employee-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        document.getElementById('close-form').addEventListener('click', () => {
            this.hideForm();
        });

        document.getElementById('cancel-btn').addEventListener('click', () => {
            this.hideForm();
        });

        // Delete confirmation
        document.getElementById('confirm-delete').addEventListener('click', () => {
            this.confirmDelete();
        });

        document.getElementById('cancel-delete').addEventListener('click', () => {
            this.hideDeleteModal();
        });
    }

    displayEmployees() {
        const employeeList = document.getElementById('employee-list');
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedEmployees = this.filteredEmployees.slice(startIndex, endIndex);

        employeeList.innerHTML = '';

        if (paginatedEmployees.length === 0) {
            employeeList.innerHTML = '<div class="employee-card"><p>No employees found.</p></div>';
            return;
        }

        paginatedEmployees.forEach(employee => {
            const employeeCard = document.createElement('div');
            employeeCard.className = 'employee-card';
            employeeCard.innerHTML = `
                <div class="employee-info">
                    <h3>${employee.firstName} ${employee.lastName}</h3>
                    <p><strong>ID:</strong> ${employee.id}</p>
                    <p><strong>Email:</strong> ${employee.email}</p>
                    <p><strong>Department:</strong> ${employee.department}</p>
                    <p><strong>Role:</strong> ${employee.role}</p>
                </div>
                <div class="employee-actions">
                    <button onclick="employeeDirectory.editEmployee(${employee.id})">Edit</button>
                    <button onclick="employeeDirectory.deleteEmployee(${employee.id})">Delete</button>
                </div>
            `;
            employeeList.appendChild(employeeCard);
        });
    }

    handleSearch(searchTerm) {
        const term = searchTerm.toLowerCase();
        this.filteredEmployees = employees.filter(employee => 
            employee.firstName.toLowerCase().includes(term) ||
            employee.lastName.toLowerCase().includes(term) ||
            employee.email.toLowerCase().includes(term)
        );
        this.currentPage = 1;
        this.displayEmployees();
        this.updatePagination();
    }

    handleSort(sortField) {
        if (!sortField) {
            this.sortField = '';
            this.sortDirection = 'asc';
            this.filteredEmployees = [...employees];
        } else {
            this.sortField = sortField;
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            
            this.filteredEmployees.sort((a, b) => {
                let aVal = a[sortField];
                let bVal = b[sortField];
                
                if (this.sortDirection === 'desc') {
                    [aVal, bVal] = [bVal, aVal];
                }
                
                return aVal.localeCompare(bVal);
            });
        }
        
        this.currentPage = 1;
        this.displayEmployees();
        this.updatePagination();
    }

    showFilterPopup() {
        document.getElementById('filter-popup').classList.add('show');
    }

    hideFilterPopup() {
        document.getElementById('filter-popup').classList.remove('show');
    }

    applyFilters() {
        const firstNameFilter = document.getElementById('filter-firstName').value.toLowerCase();
        const departmentFilter = document.getElementById('filter-department').value;
        const roleFilter = document.getElementById('filter-role').value;

        this.filteredEmployees = employees.filter(employee => {
            const matchesFirstName = !firstNameFilter || employee.firstName.toLowerCase().includes(firstNameFilter);
            const matchesDepartment = !departmentFilter || employee.department === departmentFilter;
            const matchesRole = !roleFilter || employee.role === roleFilter;
            
            return matchesFirstName && matchesDepartment && matchesRole;
        });

        this.currentPage = 1;
        this.displayEmployees();
        this.updatePagination();
        this.hideFilterPopup();
    }

    clearFilters() {
        document.getElementById('filter-firstName').value = '';
        document.getElementById('filter-department').value = '';
        document.getElementById('filter-role').value = '';
        this.filteredEmployees = [...employees];
        this.currentPage = 1;
        this.displayEmployees();
        this.updatePagination();
    }

    updatePagination() {
        const totalItems = this.filteredEmployees.length;
        const totalPages = Math.ceil(totalItems / this.itemsPerPage);
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, totalItems);

        // Update pagination info
        document.getElementById('pagination-info').textContent = 
            `Showing ${startItem}-${endItem} of ${totalItems} employees`;

        // Update page numbers
        const pageNumbers = document.getElementById('page-numbers');
        pageNumbers.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'page-btn';
            pageBtn.textContent = i;
            if (i === this.currentPage) {
                pageBtn.classList.add('active');
            }
            pageBtn.addEventListener('click', () => {
                this.currentPage = i;
                this.displayEmployees();
                this.updatePagination();
            });
            pageNumbers.appendChild(pageBtn);
        }

        // Update navigation buttons
        document.getElementById('prev-page').disabled = this.currentPage === 1;
        document.getElementById('next-page').disabled = this.currentPage === totalPages;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.displayEmployees();
            this.updatePagination();
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.displayEmployees();
            this.updatePagination();
        }
    }

    showAddForm() {
        this.editingId = null;
        document.getElementById('form-title').textContent = 'Add Employee';
        document.getElementById('employee-form').reset();
        this.clearFormErrors();
        document.getElementById('form-modal').classList.add('show');
    }

    editEmployee(id) {
        const employee = employees.find(emp => emp.id === id);
        if (employee) {
            this.editingId = id;
            document.getElementById('form-title').textContent = 'Edit Employee';
            
            // Populate form fields
            document.getElementById('firstName').value = employee.firstName;
            document.getElementById('lastName').value = employee.lastName;
            document.getElementById('email').value = employee.email;
            document.getElementById('department').value = employee.department;
            document.getElementById('role').value = employee.role;
            
            this.clearFormErrors();
            document.getElementById('form-modal').classList.add('show');
        }
    }

    deleteEmployee(id) {
        const employee = employees.find(emp => emp.id === id);
        if (employee) {
            document.getElementById('delete-message').textContent = 
                `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`;
            this.editingId = id;
            document.getElementById('delete-modal').classList.add('show');
        }
    }

    confirmDelete() {
        if (this.editingId) {
            employees = employees.filter(emp => emp.id !== this.editingId);
            this.filteredEmployees = this.filteredEmployees.filter(emp => emp.id !== this.editingId);
            this.displayEmployees();
            this.updatePagination();
            this.hideDeleteModal();
        }
    }

    hideDeleteModal() {
        document.getElementById('delete-modal').classList.remove('show');
        this.editingId = null;
    }

    hideForm() {
        document.getElementById('form-modal').classList.remove('show');
        this.editingId = null;
    }

    clearFormErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }

    validateForm() {
        let isValid = true;
        this.clearFormErrors();

        // First Name validation
        const firstName = document.getElementById('firstName').value.trim();
        if (!firstName) {
            document.getElementById('firstName-error').textContent = 'First Name is required';
            isValid = false;
        }

        // Last Name validation
        const lastName = document.getElementById('lastName').value.trim();
        if (!lastName) {
            document.getElementById('lastName-error').textContent = 'Last Name is required';
            isValid = false;
        }

        // Email validation
        const email = document.getElementById('email').value.trim();
        if (!email) {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!this.isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Department validation
        const department = document.getElementById('department').value;
        if (!department) {
            document.getElementById('department-error').textContent = 'Department is required';
            isValid = false;
        }

        // Role validation
        const role = document.getElementById('role').value;
        if (!role) {
            document.getElementById('role-error').textContent = 'Role is required';
            isValid = false;
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    handleFormSubmit() {
        if (!this.validateForm()) {
            return;
        }

        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            department: document.getElementById('department').value,
            role: document.getElementById('role').value
        };

        if (this.editingId) {
            // Edit existing employee
            const index = employees.findIndex(emp => emp.id === this.editingId);
            if (index !== -1) {
                employees[index] = { ...employees[index], ...formData };
            }
        } else {
            // Add new employee
            const newId = Math.max(...employees.map(emp => emp.id)) + 1;
            employees.push({ id: newId, ...formData });
        }

        // Update filtered employees if needed
        this.filteredEmployees = [...employees];
        
        this.hideForm();
        this.displayEmployees();
        this.updatePagination();
    }
}

// Initialize the application when DOM is loaded
let employeeDirectory;
document.addEventListener('DOMContentLoaded', function() {
    employeeDirectory = new EmployeeDirectory();
}); 