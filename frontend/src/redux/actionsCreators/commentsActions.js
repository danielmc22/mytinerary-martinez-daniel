import axios from 'axios';

const commentsActions = {

    addComment: (comment) => {
     
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-daniel-martinez.herokuapp.com/api/itinerarios/comment', { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
    modifiComment: (comment) => {
        console.log(comment)
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-daniel-martinez.herokuapp.com/api/itinerarios/comentario', { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },
    
    deleteComment: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://mytinerary-daniel-martinez.herokuapp.com/api/itinerarios/comment/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
}

export default commentsActions;