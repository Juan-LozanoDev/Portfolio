import React, {useContext } from "react";
import allProjects from "../../mocks/allProjects.json";
import allQualifications from "../../mocks/allQualifications.json";
import allSkills from "../../mocks/allSkills.json";

const AppContext = React.createContext()



const AppProvider = ({ children }) => {
    const projects = allProjects.Projects;
    const qualifications = allQualifications.Qualifications;
    const skills = allSkills.Skills;
    return (
        <AppContext.Provider value={{projects, qualifications, skills}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }
