import prisma from '../DB/dbConfig.js'


export const createComment =async(req,res)=>{
    const {user_id,post_id,comment } =req.body;

    const newComment =await prisma.comment.create({
        data:{
            user_id :Number(user_id) ,// also given hashed password
            post_id :Number(post_id),
            comment

        }
    })

    return res.json({
        status :200,
        data :newComment,
        message :"New comment is created successfully"
    })
    
}

export const  updateComment =async(req,res)=>{
    const CommentId =req.params.id; //this type is String --typeScript
    const {user_id,post_id,comment} =req.body

    const updateComment =await  prisma.comment.update({
        where:{
            id :Number(CommentId)
        },
        data:{
            user_id,post_id,comment
        }
    })

    return res.json({
        status :200,
        data:updateComment,
        message :"Commnets updated Successfully"
    })
}

export const fetchComments =async(req,res)=>{
    const Comments =await prisma.comment.findMany({
      
    }) //return in array all data
    // meant this function findMany return array

    return res.json({
        status :200,
        // count :users.length(),
        data  :Comments,
        message:"All Commented data fetch"
    })
}

export const showComments =async(req,res)=>{
    const commnetId =req.params.id;
    const comment =await prisma.comment.findFirst({
        where:{
            id :Number(commnetId)
        }
    }) //this findFirst retrun as object only
    return res.json({
        status :200,
        data :comment,
        message:"Showing commnet still created"
    })
}

export const deleteComment =async(req,res)=>{
    const ComnetId =req.params.id;
    const comment =await prisma.comment.delete({
        where:{
            id :Number(ComnetId)
        }
    })
    return res.json({
        status :200,
        data :comment,
        message :"Above commnets deleted "
    })
}