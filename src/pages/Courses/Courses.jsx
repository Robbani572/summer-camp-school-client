import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useCourses from '../../hooks/useCourses/useCourses';
import CoursesTab from './CoursesTab';

const Courses = () => {
    const [courses] = useCourses()

    const approvedCourses = courses.filter(item => item.status === 'approved')


    const painting = approvedCourses.filter(item => item.category === 'Painting');
    const drawing = approvedCourses.filter(item => item.category === 'Drawing');
    const sculpture = approvedCourses.filter(item => item.category === 'Sculpture');

    return (
        <Tabs
            selectedTabClassName="border-[#DCFDFF] border-b-4 border-0 text-[#282E7A]"
            className="max-w-screen-xl mx-auto min-h-screen md:shadow-2xl md:bg-base-100 pt-20 px-10"
        >

            <TabList className="flex justify-center items-center md:gap-8 md:p-8 mb-8 gap-4">
                <Tab className="md:text-2xl hover:text-[#282E7A] text-sm md:font-bold font-semibold cursor-pointer text-center uppercase">Painting</Tab>
                <Tab className="md:text-2xl hover:text-[#282E7A] text-sm md:font-bold font-semibold cursor-pointer text-center uppercase">Drawing</Tab>
                <Tab className="md:text-2xl hover:text-[#282E7A] text-sm md:font-bold font-semibold cursor-pointer text-center uppercase">Sculpture</Tab>
            </TabList>

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