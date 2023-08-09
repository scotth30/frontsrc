import React, { useState, FunctionComponent } from 'react';
import SideBar from '../sidebar/SideBar';
import SearchBar from '../searchbar/SearchBar';
import AddProject from '../addproject/AddProject';
import AddCustomer from '../addcustomer/AddCustomer';
import AddEmployee from '../addemployee/AddEmployee';
import AddPart from '../addpart/AddPart';
import AddServiceRecord from '../addservicerecord/AddServiceRecord';
import PictureGenerator from '../picture/PictureGenerator';
import WellActivity from '../addproject/WellActivity';
import AddWellLocation from '../addproject/AddWellLocation';
import '../../css/Dashboard.css';
interface DashboardProps {}

interface FormData {
    type: string;
    data: Record<string, any>;
}

const Dashboard: React.FC<DashboardProps> = () => {
    const [currentView, setCurrentView] = useState<string>('');

    const componentsMapping: Record<string, FunctionComponent<any>> = {
        addProject: AddProject,
        addCustomer: AddCustomer,
        addEmployee: AddEmployee,
        addPart: AddPart,
        addServiceRecord: AddServiceRecord,
        addWellActivity: WellActivity,
        addWellLocation: AddWellLocation,
        generatePicture: PictureGenerator,
        // ... you can add other components as needed
    };

    const CurrentComponent = componentsMapping[currentView] || null;

    const handleOnSubmit = ({ type, data }: FormData) => {
        switch (type) {
            case 'addEmployee':
                // Process employee data
                console.log('Adding employee with data:', data);
                // Potential place to send a request to a backend server
                alert('Employee added successfully!');
                break;
            case 'addPart':
                // Process part data
                console.log('Adding part with data:', data);
                alert('Part added successfully!');
                break;
            // ... handle other form types similarly
            default:
                console.warn('Unknown form type submitted:', type);
        }
        setCurrentView(''); // Reset the current view
    };

    return ( 
        
        <div> 

                        <div className="sidesearch">
                            <div className='sidebar'>
                    <SideBar />
                    </div>
                    <div className='searchbar'>
            <SearchBar setCurrentView={setCurrentView} />
            </div>
            </div>
            <div className="dashboard-container">

                <div className="dashboard-main">
                    {CurrentComponent && <CurrentComponent onSubmit={handleOnSubmit} />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
