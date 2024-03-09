import React from 'react';
import ProjectBoard from './ProjectBoard';
import './styles.css';

const App = () => {
  return (
    <div className='main'>
      <h1 className='head' >Project Board</h1>
      <ProjectBoard />
    </div>
  );
};

export default App;

// import React from 'react';
// import ProjectBoard from './ProjectBoard';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';


// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Project Board</h1>
//         <Switch>
//           <Route path="/" exact component={ProjectBoard} />
//           {/* Add more routes if needed */}
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import ProjectBoard from './ProjectBoard';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>Project Board</h1>
//         <Routes>
//           <Route path="/" element={<ProjectBoard />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
