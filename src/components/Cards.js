import React,{useState} from 'react'
import { Edittask } from '../modals/Edittask'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export const Cards = ({taskObj, index,deleteTask,updateListArray,error}) => {
    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handledelete = () => {
        deleteTask(index)
        
    }
  return (
      
    <div class = "card-wrapper mr-5" data-aos="fade-down" style={{borderRadius:"10px",position:"relative"}}>
       
    <div class = "card-top" style={{"background-color": colors[index%5].primaryColor,borderRadius:"10px"}}></div>
    <div class = "card-bottom" style={{"background-color": colors[index%5].primaryColor,borderRadius:"10px"}}></div>

    <div class = "task-holder">
        <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "borderRadius": "10px",fontSize:"17px",color:"#301934",textAlign:"center"}}>{taskObj.Name}</span>
        <p className = "mt-3">{taskObj.Description}</p>

        <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px",display:"flex",gap:"15px"}}>
            <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={()=>{setModal(true)}}></i>
            <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handledelete}></i>
        </div>
</div>
<Edittask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
</div>
  )
}
