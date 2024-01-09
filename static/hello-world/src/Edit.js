/*import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;
*/

/*import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
 const [refreshInterval, setRefreshInterval] = useState(null);
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  
  
// Function to handle refresh interval change
  const handleRefreshIntervalChange = (event) => {
    const newInterval = event.target.value;
    setRefreshInterval(newInterval);
  };
  

  // Helper function to convert refreshInterval to milliseconds
  const getMillisecondsForInterval = (interval) => {
    switch (interval) {
      case '15min':
        return 15 * 60 * 1000;
      case '30min':
        return 30 * 60 * 1000;
      case '1hour':
        return 60 * 60 * 1000;
      case '3hours':
        return 3 * 60 * 60 * 1000;
      default:
        return null; // For 'Never' or invalid values
    }
  };  


  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
      
      <div>
        <label htmlFor="refreshInterval">Refresh Interval: </label>
        <select id="refreshInterval" onChange={handleRefreshIntervalChange} value={refreshInterval}>
          <option value="">Never</option>
          <option value="15min">Every 15 minutes</option>
          <option value="30min">Every 30 minutes</option>
          <option value="1hour">Every 1 hour</option>
          <option value="3hours">Every 3 hours</option>
        </select>
      </div>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;*/

/*import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import { view,fetch,requestJira } from '@forge/bridge';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';


function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit , selectedRefreshInterval } });
  };

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null); // Initialize to null
 const [refreshInterval, setRefreshInterval] = useState([]);
 const [selectedRefreshInterval, setSelectedRefreshInterval] = useState(null);
  useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);


 
 //this below function is working fine   
 async function fetchRoles(selectedProjectKey) {
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    
    const refresh = [
      { id: 1, name: 'Never' },
      { id: 2, name: 'Every 15 minutes' },
      { id: 3, name: 'Every 30 minutes' },
      { id: 4, name: 'Every 1 hour' },
      { id: 5, name: 'Every 3 hour' },
    ];
    console.log('refresh:', refresh);
    setRefreshInterval(refresh);
  }, []); // Run this effect only once on component mount

  


  
  const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleRefreshChange = (e) => {
    const selectedRefresh = e.target.value;
    setSelectedRefreshInterval(selectedRefresh);
  };


  return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select value={project} onChange={handleProjectChange} isMulti>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>

      <div>
        <label>
          Select Role:
          <select value={role} onChange={handleRoleChange}>
            <option value="">Select a role</option>
            {roles.map((r) => (
        	<option key={r.id} value={r.id}>
          	{r.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          Select DateUnit:
          <select value={selectedDateUnit} onChange={handleDateUnitChange}>
            <option value="">Select a DateUnit</option>
            {dateUnit.map((du) => (
              <option key={du.id} value={du.name}>
                {du.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
      
      <div>
        <label>
          Select Refresh Interval:
          <select value={selectedRefreshInterval} onChange={handleRefreshChange}>
            <option value="">Refresh Interval</option>
            {refreshInterval.map((du1) => (
              <option key={du1.id} value={du1.name}>
                {du1.name}
              </option>
            ))}
          </select>
        </label>
      </div>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}

export default Edit;
*/

/*
return (
    <Form onSubmit={onSubmit}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <div>
        <label>
          Select Project:
          <select inputId="multi-select-example"
      className="multi-select"
      classNamePrefix="react-select"
      options={project}
      isMulti
      isSearchable={false} onChange={handleProjectChange}>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
            ))}
  	 </select>
        </label>
      </div>
      
       <div>
        <label>
          Select Project:
          <select inputId="multi-select-example"
          className="multi-select"
          classNamePrefix="react-select"
  
          ismulti="true"
            onChange={handleProjectChange}>
  		<option value="">Select a project</option>
 	 	{projects.map((proj) => (
      		<option key={proj.key} value={proj.key}>
        	{proj.name}
                </option>
                
            ))}
            
  	 </select>
        </label>
      </div>
*/



import TextField from '@atlaskit/textfield';
import ButtonGroup  from '@atlaskit/button';
import { view, fetch, requestJira } from '@forge/bridge';
//import { invoke } from '@forge/bridge';
//import Select from '@atlaskit/select';
import api, { route } from "@forge/api";
import React, { useState, useEffect } from 'react';
import { Label } from '@atlaskit/form';
//import Select from 'react-select';
import { invoke } from '@forge/bridge';
//import Select from '@atlaskit/select';
import { CheckboxSelect } from '@atlaskit/select';
//import React from 'react';
import Select from 'react-select';
import Button from '@atlaskit/button/standard-button';
import { Checkbox } from '@atlaskit/checkbox';
import { RadioGroup } from '@atlaskit/radio';
import Form, { CheckboxField, Field, Fieldset, FormFooter } from '@atlaskit/form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { storage } from '@forge/api';

function Edit() {
  //const onSubmit = (formData) => view.submit(formData);
   const onSubmit = (formData) => {
    // Include the field data in the context object
    view.submit({ ...formData, context: { project, role, startDate, endDate, selectedDateUnit , selectedRefreshInterval } });
  };
  
 
  
  
 /* const onSubmit = (formData) => {
  // Destructure formData to get individual field values
  const { project, role, startDate, endDate, selectedDateUnit, selectedRefreshInterval, ...restFormData } = formData;
  
  // Update state variables with individual field values
  setProject(project);
  setRole(role);
  setStartDate(startDate);
  setEndDate(endDate);
  setSelectedDateUnit(selectedDateUnit);
  setSelectedRefreshInterval(selectedRefreshInterval);

  // Include the field data in the context object
  view.submit({ ...restFormData, context: { project, role, startDate, endDate, selectedDateUnit, selectedRefreshInterval } });
};*/

  const [project, setProject] = useState("");
  const [formData, setFormData] = useState({});
  const [projects, setProjects] = useState([]);
  const [roles, setRoles] = useState([]);
  //const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dateUnit, setDateUnit] = useState([]);
  //const [selectedDateUnit, setSelectedDateUnit] = useState(null);
 //const [selectedProjectKey, setSelectedProjectKey] = useState([]); // Initialize to null
 const [refreshInterval, setRefreshInterval] = useState([]);
 //const [selectedRefreshInterval, setSelectedRefreshInterval] = useState(null);
 const [selectedOptions, setSelectedOptions] = useState([]);
 const [data, setData] = useState(null);
  const [selectedProjects, setSelectedProjects] = React.useState([]);
const [startAt, setStartAt] = useState(0);
  const maxResults = 50;
   
    const [selectedDateUnit, setSelectedDateUnit] = useState(() => {
  const storedValue = localStorage.getItem('selectedDateUnit');
  return storedValue !== null ? storedValue : '';
});
    
   const [selectedRefreshInterval, setSelectedRefreshInterval] = useState(() => {
  const storedValue = localStorage.getItem('selectedRefreshInterval');
  return storedValue !== null ? storedValue : '';
});

/*const [selectedProjectKey, setSelectedProjectKey] = useState(() => {
  const storedValue = localStorage.getItem('selectedProjectKey');
  return storedValue !== null ? storedValue : '';
});*/

const [selectedProjectKey, setSelectedProjectKey] = useState(() => {
  const storedValue = localStorage.getItem('selectedProjectKey');
  console.log("storedValue",storedValue);
  return storedValue ? JSON.parse(storedValue) : [];
});   
 console.log("selectedProjectKey",selectedProjectKey);
 
 
 useEffect(() => {
  setProject(selectedProjectKey);
}, [selectedProjectKey]);

 const [role, setRole] = useState(() => {
  const storedValue = localStorage.getItem('selectedRoleKey');
  console.log("storedValue of role",storedValue);
  return storedValue ? JSON.parse(storedValue) : [];
});

 /* useEffect(() => {
  async function fetchProjects() {
    try {
      console.log("entered fetchProjects new");
      const response = await requestJira(`/rest/api/3/project/search`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log("fetchProjects");
      const responseJson = await response.json();
      //const projectNames = responseJson.values.map((project) => project.name);
      const projectNames = responseJson.values.map((project) => ({
        key: project.key,
        name: project.name
      }));
      console.log("Project Names:", projectNames);

      setProjects(projectNames);
      console.log("responseJson.values",responseJson.values);
      console.log("exit fetchProjects");
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }

  fetchProjects(); // Call the function here
}, []);*/

useEffect(() => {
    async function fetchProjects() {
      try {
        console.log("entered fetchProjects new");
        const response = await requestJira(`/rest/api/3/project/search?startAt=${startAt}&maxResults=${maxResults}`, {
          headers: {
            'content-type': 'application/json'
          }
        });
        console.log("fetchProjects");

        const responseJson = await response.json();
        const projectNames = responseJson.values.map((project) => ({
          key: project.key,
          name: project.name
        }));
        console.log("Project Names:", projectNames);

        setProjects((prevProjects) => [...prevProjects, ...projectNames]);
	
	console.log("totalCount", responseJson.total);
        console.log("responseJson.values", responseJson.values);
        console.log("exit fetchProjects");

        if (responseJson.total < maxResults) {
          // Stop fetching when all projects are retrieved
          return;
        }

        // Update startAt for the next batch
        setStartAt((prevStartAt) => prevStartAt + maxResults);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects(); // Call the function here
  }, [startAt]);

 
 //this below function is working fine   
 /*async function fetchRoles(selectedProjectKey) {
 console.log("selectedProjectKey in function",selectedProjectKey);
  if (selectedProjectKey !== null) {
        try {
          const response = await requestJira(`/rest/api/3/project/${selectedProjectKey}/role`, {
            headers: {
              'content-type': 'application/json',
            },
          });
          const responseJson = await response.json();
          console.log("responseJson roles", responseJson);

          // Initialize an array to store role objects
          const roles = [];

          // Add the "All" option to the roles array
          roles.push({ id: 'All', name: 'All' });

          // Iterate through the key-value pairs in the responseJson
          for (const roleName in responseJson) {
            if (responseJson.hasOwnProperty(roleName)) {
              const roleUrl = responseJson[roleName];
              console.log("roleUrl", roleUrl);
              const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
              roles.push({
                id: roleId,
                name: roleName,
              });
            }
          }

          console.log("Roles:", roles);
    // Now you can set the roles in your component state
    // For example, assuming you have a setRoles function:
     setRoles(roles);

  } catch (error) {
    console.error('Error fetching roles for the selected project:', error);
  }
  
  }
  
}*/

//below code is working fine for role latest
console.log("selectedProjectKeys outside function",selectedProjectKey);
/*async function fetchRoles(selectedProjectKeys) {


  const rolesPromises = selectedProjectKeys.map(async (projectKey) => {
    try {
      const response = await requestJira(`/rest/api/3/project/${projectKey}/role`, {
        headers: {
          'content-type': 'application/json',
        },
      });

      const responseJson = await response.json();
      console.log(`Roles for project ${projectKey}:`, responseJson);

      return responseJson; // Return the roles for each project
    } catch (error) {
      console.error(`Error fetching roles for project ${projectKey}:`, error);
      throw error; // Rethrow the error to handle it later if needed
    }
  });

  try {
    const rolesArray = await Promise.all(rolesPromises);

    // Now rolesArray contains an array of roles for each selected project key
    console.log('All roles:', rolesArray);

    // Initialize an array to store role objects
    const roles = [];

    // Add the "All" option to the roles array
    roles.push({ id: 'All', name: 'All' });

    // Iterate through the rolesArray
    rolesArray.forEach((responseJson, index) => {
      // Process each responseJson for each project key as needed
      for (const roleName in responseJson) {
        if (responseJson.hasOwnProperty(roleName)) {
          const roleUrl = responseJson[roleName];
          console.log(`Role URL for project ${selectedProjectKeys[index]}:`, roleUrl);
          const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
          roles.push({
            id: roleId,
            name: roleName,
          });
        }
      }
      
    });

    console.log("Roles:", roles);
    const uniqueRoles = Array.from(new Set(roles.map(role => JSON.stringify(role)))).map(str => JSON.parse(str));
    console.log("uniqueRoles",uniqueRoles); 
    // For example, assuming you have a setRoles function:
    setRoles(uniqueRoles);
  } catch (error) {
    console.error('Error fetching roles for one or more projects:', error);
  }
}*/


useEffect(() => {
    async function fetchRoles() {

console.log("fetchRoles calling in useEffect");
  const rolesPromises = selectedProjectKey.map(async (projectKey) => {
    try {
      const response = await requestJira(`/rest/api/3/project/${projectKey}/role`, {
        headers: {
          'content-type': 'application/json',
        },
      });

      const responseJson = await response.json();
      console.log(`Roles for project ${projectKey}:`, responseJson);

      return responseJson; // Return the roles for each project
    } catch (error) {
      console.error(`Error fetching roles for project ${projectKey}:`, error);
      throw error; // Rethrow the error to handle it later if needed
    }
  });

  try {
    const rolesArray = await Promise.all(rolesPromises);

    // Now rolesArray contains an array of roles for each selected project key
    console.log('All roles:', rolesArray);

    // Initialize an array to store role objects
    const roles = [];

    // Add the "All" option to the roles array
    roles.push({ id: 'All', name: 'All' });

    // Iterate through the rolesArray
    rolesArray.forEach((responseJson, index) => {
      // Process each responseJson for each project key as needed
      for (const roleName in responseJson) {
        if (responseJson.hasOwnProperty(roleName)) {
          const roleUrl = responseJson[roleName];
          console.log(`Role URL for project ${selectedProjectKey[index]}:`, roleUrl);
          const roleId = roleUrl.split('/').pop(); // Extract the role ID from the URL
          roles.push({
            id: roleId,
            name: roleName,
          });
        }
      }
      
    });

    console.log("Roles:", roles);
    const uniqueRoles = Array.from(new Set(roles.map(role => JSON.stringify(role)))).map(str => JSON.parse(str));
    console.log("uniqueRoles",uniqueRoles); 
    // For example, assuming you have a setRoles function:
    setRoles(uniqueRoles);
  } catch (error) {
    console.error('Error fetching roles for one or more projects:', error);
  }
}

    fetchRoles(); // Call the function here
  }, [selectedProjectKey]);
    	
   useEffect(() => {
    
    const simulatedTimeUnit = [
      { id: 1, name: 'Last Week' },
      { id: 2, name: 'Last Month' },
      { id: 3, name: 'Last 3 Months' },
      { id: 4, name: 'Custom' },
    ];
    console.log('simulatedTimeUnit:', simulatedTimeUnit);
    setDateUnit(simulatedTimeUnit);
  }, []); // Run this effect only once on component mount

  useEffect(() => {
    
    const refresh = [
      { id: 1, name: 'Never' },
      { id: 2, name: 'Every 15 minutes' },
      { id: 3, name: 'Every 30 minutes' },
      { id: 4, name: 'Every 1 hour' },
      { id: 5, name: 'Every 3 hour' },
    ];
    console.log('refresh:', refresh);
    setRefreshInterval(refresh);
  }, []); // Run this effect only once on component mount

  

  

  // Generate some random values for the options
  const options = [
    { value: 'value1', label: 'Option 1' },
    { value: 'value2', label: 'Option 2' },
    { value: 'value3', label: 'Option 3' },
  ];

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  
  /*const handleProjectChange = (e) => {
    const selectedProjectKey = e.target.value;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };*/

  /*const handleRoleChange = (e) => {
      document.documentElement.style.overflowY = 'visible';
    setRole(e.target.value);
  };*/
  
  /*const handleRoleChange = (selectedOption) => {
  console.log("Selected Option:", selectedOption);
  //document.documentElement.style.overflowY = 'visible';
  setRole(selectedOption.value);
};*/

  /*const handleDateUnitChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDateUnit(selectedValue);
  };*/

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  /*const handleRefreshChange = (e) => {
    const selectedRefresh = e.target.value;
    setSelectedRefreshInterval(selectedRefresh);
  };*/


 /*const handleProjectChange = (selectedOptions) => {
    setSelectedProjects(selectedOptions);
  };*/
  
  /*const handleProjectChange = (selectedOptions) => {
   const selectedProjectKeys1 = selectedOptions.map(option => option.value);
    console.log("selectedProjectKeys1",selectedProjectKeys1);
    const selectedProjectKey = selectedProjectKeys1;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected

    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      fetchRoles(selectedProjectKey);
    }
  };
 
 const projectOptions = projects.map((proj) => ({
    value: proj.key,
    label: proj.name,
  }));*/
  
 /* const handleProjectChange = (selectedOptions) => {
   const selectedProjectKeys1 = selectedOptions.map(option => option.value);
    console.log("selectedProjectKeys1",selectedProjectKeys1);
    const selectedProjectKey = selectedProjectKeys1;
    setProject(selectedProjectKey);
    setSelectedProjectKey(selectedProjectKey); // Set the selectedProjectKey when a project is selected
     localStorage.setItem('selectedProjectKey', JSON.stringify(selectedProjectKey));
    // Check if a project is selected before calling fetchRoles
    if (selectedProjectKey) {
      console.log('calling fetchroles',selectedProjectKey);
      fetchRoles(selectedProjectKey);
    }
  };*/
  
  const handleProjectChange = (selectedOptions) => {
  const selectedProjectKeys1 = selectedOptions.map(option => option.value);
  setProject(selectedProjectKeys1);
  setSelectedProjectKey(selectedProjectKeys1);
  localStorage.setItem('selectedProjectKey', JSON.stringify(selectedProjectKeys1));
};
 
 const projectOptions = projects.map((proj) => ({
    value: proj.key,
    label: proj.name,
  }));
  
  //const roleOptions = roles.map((r) => ({ label: r.name, value: r.id }));
  
  /*const handleRoleChange = (selectedOptions) => {
  const selectedRoleKeys = selectedOptions.map((option) => option.value);
  console.log("selectedRoleKeys", selectedRoleKeys);
  setRole(selectedRoleKeys);
};*/


const handleRoleChange = (selectedOptions) => {
  const selectedRoleKeys = selectedOptions.map((option) => option.value);
  setRole(selectedRoleKeys);
  localStorage.setItem('selectedRoleKey', JSON.stringify(selectedRoleKeys));
  
};



const roleOptions = roles.map((r) => ({
  value: r.id,
  label: r.name,
}));


const handleDateUnitChange = (selectedOption) => {
  setSelectedDateUnit(selectedOption.value);
  localStorage.setItem('selectedDateUnit', selectedOption.value);

};

const dateUnitOptions = dateUnit.map((du) => ({
  value: du.name,
  label: du.name,
}));
  
  
 const handleRefreshChange = (selectedOption) => {
  setSelectedRefreshInterval(selectedOption.value);
  localStorage.setItem('selectedRefreshInterval', selectedOption.value);
};

const refreshIntervalOptions = refreshInterval.map((du1) => ({
  value: du1.name,
  label: du1.name,
}));
 


return (
  <Form onSubmit={onSubmit}>
    {({ formProps, submitting }) => (
      <form {...formProps} style={{ display: 'flex', width: '400px', margin: '0 auto', flexDirection: 'column' }}>
        <label>
          Select Project:
          <Select
            inputId="multi-select-example"
            className="multi-select"
            classNamePrefix="react-select"
            options={projectOptions}
            isMulti
            isSearchable={true}
            onChange={handleProjectChange}
            value={projectOptions.filter(option => selectedProjectKey.includes(option.value))}

          />
        </label>
	<div>
          <label>
            Select Role:
            <Select
              options={roleOptions}
              isMulti
              isSearchable={true}
              onChange={handleRoleChange}
              value={roleOptions.filter((option) => role.includes(option.value))}
            />
          </label>
        </div>

      <div>
    <label>
      Select DateUnit:
      <Select
        value={dateUnitOptions.find((option) => option.value === selectedDateUnit)}
        options={dateUnitOptions}
        isSearchable={true}
        onChange={handleDateUnitChange}
        menuPosition="fixed" 
      />
    </label>
  </div>

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={handleStartDateChange} />
          </label>
        </div>
      )}

      {selectedDateUnit === 'Custom' && (
        <div>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={handleEndDateChange} />
          </label>
        </div>
      )}
      
     <div>
    <label>
      Select Refresh Interval:
      <Select
        value={refreshIntervalOptions.find((option) => option.value === selectedRefreshInterval)}
        options={refreshIntervalOptions}
        isSearchable={true}
        onChange={handleRefreshChange}
        menuPlacement="top"
      />
    </label>
  </div>
          <br/>
          <ButtonGroup>
            <Button type="submit" isDisabled={submitting}>Save</Button>
            <Button appearance="subtle" onClick={view.close}>Cancel</Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}


export default Edit;



