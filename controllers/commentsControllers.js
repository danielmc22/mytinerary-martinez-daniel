const Itinerarios = require('../models/itinerarios')

const commentsControllers = {

    addComment: async (req, res) => {
        const {Itinerario,comment} = req.body.comment
        const user = req.user._id                     //saco el id que llega desde passport
        try {
            const nuevoComment = await Itinerarios.findOneAndUpdate({_id:Itinerario}, {$push: {comments: {comment: comment, userID: user}}}, {new: true}).populate("comments.userID", {fullName:1})
            res.json({ success: true, response:{nuevoComment}, message:"gracias por dejarnos tu comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, try again in a moment!" })
        }

    },
    modifiComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
        const user = req.user._id                       //saco el id que llega desde passport
        try {
            const newComment = await Itinerarios.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment}}, {new: true})
            console.log(newComment)
            res.json({ success: true, response:{newComment}, message:"tu comentario a sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Something went wrong, try again in a moment!" })
        }

    },
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerarios.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
          console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong, try again in a moment!" })
        }

    },
    
}
module.exports = commentsControllers