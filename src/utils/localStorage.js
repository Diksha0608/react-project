 const employees = [
  {
    Id: 1,
    Email: "employee1@example.com",
    Password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue with session timeout on login",
        date: "2025-05-28",
        category: "Bug Fix",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Update dashboard UI",
        description: "Redesign user dashboard layout for better usability",
        date: "2025-05-25",
        category: "Design",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Compress and optimize homepage images for faster load time",
        date: "2025-05-20",
        category: "Performance",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      }
    ]
  },
  {
    Id: 2,
    Email: "employee2@example.com",
    Password: "123",
    tasks: [
      {
        title: "Build task manager",
        description: "Develop the frontend for the task manager module",
        date: "2025-05-27",
        category: "Development",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Create API mockups",
        description: "Draft and test mock API responses for integration",
        date: "2025-05-26",
        category: "Backend",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Write documentation",
        description: "Document setup instructions and deployment steps",
        date: "2025-05-21",
        category: "Documentation",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    Id: 3,
    Email: "employee3@example.com",
    Password: "123",
    tasks: [
      {
        title: "Fix CSS breakpoints",
        description: "Ensure mobile responsiveness on product listing page",
        date: "2025-05-24",
        category: "UI Fix",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Update dependencies",
        description: "Upgrade React and related packages to latest versions",
        date: "2025-05-22",
        category: "Maintenance",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Refactor navbar",
        description: "Simplify navigation component for better performance",
        date: "2025-05-20",
        category: "Refactor",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      },
      {
        title: "Accessibility audit",
        description: "Ensure all forms are keyboard navigable",
        date: "2025-05-18",
        category: "Compliance",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    Id: 4,
    Email: "employee4@example.com",
    Password: "123",
    tasks: [
      {
        title: "Design login screen",
        description: "Create wireframes for new login experience",
        date: "2025-05-29",
        category: "UI/UX",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Test payment flow",
        description: "Perform end-to-end testing on payment process",
        date: "2025-05-24",
        category: "QA",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Fix broken links",
        description: "Audit site and fix all 404 issues",
        date: "2025-05-23",
        category: "Bug Fix",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      }
    ]
  },
  {
    Id: 5,
    Email: "employee5@example.com",
    Password: "123",
    tasks: [
      {
        title: "Create carousel component",
        description: "Build reusable image carousel for homepage",
        date: "2025-05-30",
        category: "Component",
        active: true,
        completed: false,
        newTask: true,
        failed: false
      },
      {
        title: "Setup ESLint",
        description: "Add and configure linting rules for consistent code style",
        date: "2025-05-27",
        category: "DevOps",
        active: false,
        completed: true,
        newTask: false,
        failed: false
      },
      {
        title: "Bug in checkout",
        description: "Resolve issue where checkout fails on mobile",
        date: "2025-05-26",
        category: "Critical Bug",
        active: false,
        completed: false,
        newTask: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    Id: 100,
    Email: "admin@example.com",
    Password: "123"
  }
];

export const setLocalStorage = () =>{

localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () =>{
const employees = JSON.parse(localStorage.getItem('employees'))
const admin = JSON.parse(localStorage.getItem('admin'))
console.log(employees)
console.log(admin)
    
}