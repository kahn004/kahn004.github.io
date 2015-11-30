import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import { Router } from 'react-router'

var history = createHistory()

// var rootRoute = {
// 	component: 'div',
// 	childRoutes: [
// 		{
// 			path: '/',
// 			component: require('./components/Main'),
// 			childRoutes: [
// 				require('./routes/Calendar')
// 			]
// 		}
// 	]
// }

// render(
// 	<Router history={history} routes={rootRoute} />,
// 	document.getElementById('example')
// )

import { Route } from 'react-router'

import Main from './components/Main'
// import Course from './routes/Course/components/Course'
// import AnnouncementsSidebar from './routes/Course/routes/Announcements/components/Sidebar'
// import Announcements from './routes/Course/routes/Announcements/components/Announcements'
// import Announcement from './routes/Course/routes/Announcements/routes/Announcement/components/Announcement'
// import AssignmentsSidebar from './routes/Course/routes/Assignments/components/Sidebar'
// import Assignments from './routes/Course/routes/Assignments/components/Assignments'
// import Assignment from './routes/Course/routes/Assignments/routes/Assignment/components/Assignment'
// import CourseGrades from './routes/Course/routes/Grades/components/Grades'
import Calendar from './routes/Calendar/components/Calendar'
// import Grades from './routes/Grades/components/Grades'
// import Messages from './routes/Messages/components/Messages'

// render(
//   <Router>
//     <Route path="/" component={App}>
//       <Route path="calendar" component={Calendar} />
//       <Route path="course/:courseId" component={Course}>
//         <Route path="announcements" components={{
//           sidebar: AnnouncementsSidebar,
//           main: Announcements
//         }}>
//           <Route path=":announcementId" component={Announcement} />
//         </Route>
//         <Route path="assignments" components={{
//           sidebar: AssignmentsSidebar,
//           main: Assignments
//         }}>
//           <Route path=":assignmentId" component={Assignment} />
//         </Route>
//         <Route path="grades" component={CourseGrades} />
//       </Route>
//       <Route path="grades" component={Grades} />
//       <Route path="messages" component={Messages} />
//       <Route path="profile" component={Calendar} />
//     </Route>
//   </Router>,
//   document.getElementById('example')
// )

render(
  <Router history={history}>
    <Route path="/" component={Main}>
      <Route path="calendar" component={Calendar} />
    </Route>
  </Router>,
  document.getElementById('example')
)

