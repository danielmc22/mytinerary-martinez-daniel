
 import axios from 'axios';

const activitiesActions = {

    activityItinerary: (id) => {
        console.log(id)
        return async (dispatch, getState) => {
            try {

                  let response = await axios.get('https://mytinerary-daniel-martinez.herokuapp.com/api/itineraryActivities/'+id)   

                console.log(response.data)      
                return { success: true, response: response.data.response }; 
                     
            } catch (error) {
                return {
                    success:false,
                    response: error,
                }
            }
        }
    }
} 
export default activitiesActions; 

