import React from 'react'
import '../AppMain.css'; // Two dots to go outside of the components folder
import { SubjectData } from './SubjectData'; // Imports subject data
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Subject() {
    return (
        <div className='Subject'>
            <ul className='SubjectList'> {/* Different subjects lists */}
                {SubjectData.map((val, key)=> {
                    return (
                        <li 
                        key={key} 
                        className='SubjectRow'
                        style={{ backgroundColor: val.color }} /* Applies subject's color */
                        >
                            <div id='SubjectWrapper'>
                                <div id='SubjectName'>{val.name}</div> {/* Applies subject's name */}
                                <div id='SubjectButton'><EditIcon /></div> {/* Applies subject's button to enable editing and deleting of subject name and tasks */}
                            </div>
                            <div id='SubjectTasks'>{val.tasks}</div> {/* Applies subject's tasks */}
                            <div id='SubjectDeleteButton'><DeleteIcon /></div> {/* Applies subject's delete button */}
                        </li>
                    )
                })}
            </ul>
        </div>
        );
    }

export default Subject