import React, { useRef, useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar";
import AddProjectModal from "./components/AddProjectModal";
import NoProjectSelected from "./components/NoProjectSelected";
import ErrorModal from "./components/ErrorModal";
import SelectedProject from "./components/SelectedProject";

function App() {
  const errorModalDialogRef = useRef();

  const [projectList, setProjectList] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectList((prev) => {
      return {
        ...prev,
        selectedProjectId: null
      }
    })

  }

  function handleSave(projTitle, projDesc, projDueDate) {

    if (projTitle.trim() === '' || projDesc.trim() === '' || projDueDate.trim() === '') {
      errorModalDialogRef.current.open();
      return
    }


    const projctId = Math.random();
    const projectData = {

      title: projTitle,
      description: projDesc,
      dueDate: projDueDate,
      id: projctId,
    }

    setProjectList((prevList) => {
      return {
        ...prevList,
        selectedProjectId: undefined,
        projects: [projectData, ...prevList.projects]

      }
    }

    )

  }

  function handleCancel(params) {
    setProjectList((prevList) => {
      return {
        ...prevList,
        selectedProjectId: undefined
      }
    }
    )
  }

  function handleSelectProject(id) {
    setProjectList((prevList) => {
      return {
        ...prevList,
        selectedProjectId: id,
      }
    })
  }

  function handleDelete(id) {

    

    setProjectList((prevList)=>{
     return {
      ...prevList,
      projects : prevList.projects.filter((project)=>project.id !== id),//did by splice but both the tasks were deleted
     }
    })
  }

  const selectedProject = projectList.projects.find((project) => project.id === projectList.selectedProjectId)

  let content = selectedProject && <SelectedProject onDelete={handleDelete} projectTitle={selectedProject.title} projectDescription={selectedProject.description} projectDueDate={selectedProject.dueDate} id={selectedProject.id}/>;

  if (projectList.selectedProjectId === null) {
    content = <AddProjectModal onAddProject={handleAddProject} onSave={handleSave} onCancel={handleCancel} />
  }
  else if (projectList.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />
  }


  console.log(selectedProject);;

  //console.log(projectList);

  return (
    <>
      <ErrorModal ref={errorModalDialogRef} btnCaption='Close'>
        <h2 className="text-xl text-bold text-stone-800 my-4">Invalid Input</h2>
        <p className=" text-sm">Please fill out all the required Fields</p>

      </ErrorModal>

      <div className="h-screen flex flex-row" >
        <ProjectSidebar handleAddProject={handleAddProject}
          projectList={projectList.projects}
          onselect={handleSelectProject}
          selectedProjectId={selectedProject && selectedProject.id}
        />
        {content}
      </div>
    </>
  );
}

export default App;
