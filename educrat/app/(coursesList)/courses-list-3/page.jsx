

import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import CourseListThree from '@/components/courseList/CourseListThree'


import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import React from 'react'
export const metadata = {
  title: 'Couese-list-3',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>
        <Header/>
        <div className="content-wrapper  js-content-wrapper overflow-hidden">
            <PageLinks/>
            <CourseListThree/>
            <FooterOne/>
        </div>
    </div>
  )
}
