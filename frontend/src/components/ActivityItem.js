import React from "react";
import '../styles/activity.css'

 const ActivityItem = ( { activities } ) => {
   
  return (

    <div className="container">
    {activities?.map((activity, index) => (
                  <div className="container-section" key={index}>
                  <img
                    className="activityImage"
                    src={activity.image}
                    alt={activity.title}
                  />
                  <h5 className="description">{activity.text}</h5>
                  <p className="activityName">{activity.title}</p>
                </div>
            ))}
        </div>

        
  )
}

export default ActivityItem