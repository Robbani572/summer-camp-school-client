import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCourses from '../../hooks/useCourses/useCourses';
import { useParams } from 'react-router-dom';
import CoursesTab from './CoursesTab';

const Courses = () => {

    // const [tabIndex, setTabIndex] = useState(0);
    const categories = ['Popular', 'Painting', 'Drawing', 'Sculpture'];
    const [courses] = useCourses()
    // const { category } = useParams();
    // const initialIndex = categories.indexOf(category);
    // const [tabIndex, setTabIndex] = useState(initialIndex);


    // const popular = courses.filter(item => item.category === 'Popular');
    const painting = courses.filter(item => item.category === 'Painting');
    const drawing = courses.filter(item => item.category === 'Drawing');
    const sculpture = courses.filter(item => item.category === 'Sculpture');

    return (
        <Tabs
            // selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}
            selectedTabClassName="border-[#DCFDFF] border-b-4 border-0 text-[#282E7A]"
            className="max-w-screen-xl mx-auto min-h-screen md:shadow-2xl md:bg-base-100 pt-20"
        >

            <TabList className="flex justify-center items-center md:gap-8 md:p-8 mb-8 gap-4">
                {/* <Tab className="md:text-2xl text-sm md:font-bold font-light cursor-pointer text-center uppercase">Popular</Tab> */}
                <Tab className="md:text-2xl hover:text-[#282E7A] text-sm md:font-bold font-semibold cursor-pointer text-center uppercase">Painting</Tab>
                <Tab className="md:text-2xl hover:text-[#282E7A] text-sm md:font-bold font-semibold cursor-pointer text-center uppercase">Drawing</Tab>
                <Tab className="md:text-2xl hover:text-[#282E7A] text-sm md:font-bold font-semibold cursor-pointer text-center uppercase">Sculpture</Tab>
            </TabList>

            {/* <TabPanel>
                <CoursesTab courses={popular}></CoursesTab>
            </TabPanel> */}

            <TabPanel>
                <CoursesTab courses={painting}></CoursesTab>
            </TabPanel>

            <TabPanel>
                <CoursesTab courses={drawing}></CoursesTab>
            </TabPanel>

            <TabPanel>
                <CoursesTab courses={sculpture}></CoursesTab>
            </TabPanel>
        </Tabs>
    );
};

export default Courses;