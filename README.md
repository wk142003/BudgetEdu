
# BudgetEdu

BudgetEdu is an educational web application designed to teach users about budgeting, its advantages and disadvantages, and effective budgeting strategies. Built with React and Vite, it features interactive components and a modern UI powered by Tailwind CSS.

## Features
- **Introduction to Budgeting**: Learn the basics and importance of budgeting.
- **Advantages & Disadvantages**: Explore the pros and cons of budgeting through interactive cards and quizzes.
- **Budgeting Strategies**: Discover practical strategies for effective budgeting.
- **Visual Components**: Card flips, grids, tables, and quizzes for engaging learning.
- **Responsive Design**: Works well on desktop and mobile devices.

## Project Structure
```
public/           # Static assets
src/
  App.jsx         # Main React app
  backend/
	 server.js     # Backend server (Node.js/Express)
  components/     # Reusable UI components
  pages/          # Main pages (Introduction, Advantages, Disadvantages, etc.)
  assets/         # Images and icons
index.html        # Entry HTML file
package.json      # Project metadata and scripts
```

## Getting Started
### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```sh
	git clone https://github.com/wk142003/BudgetEdu.git
	cd budgeting-site
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```
3. Start the development server:
	```sh
	npm run dev
	# or
	yarn dev
	```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend (Optional)
If you want to run the backend server:
```sh
node src/backend/server.js
```

## Technologies Used
- React
- Vite
- Tailwind CSS
- Node.js/Express (backend)
- ESLint (code quality)

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
