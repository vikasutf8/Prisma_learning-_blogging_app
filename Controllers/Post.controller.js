import prisma from '../DB/dbConfig.js'


export const createPost =async(req,res)=>{
    const {user_id,title ,description } =req.body;

    const newPost =await prisma.post.create({
        data:{
            user_id :Number(user_id) ,// also given hashed password
            title,
            description
        }
    })

    return res.json({
        status :200,
        data :newPost,
        message :"New Post is created successfully"
    })
    console.log(res)
}

export const  updatePost =async(req,res)=>{
    const PostId =req.params.id; //this type is String --typeScript
    const {user_id,title,description} =req.body

    const updatePost =await  prisma.post.update({
        where:{
            id :Number(PostId)
        },
        data:{
            user_id,title,description
        }
    })

    return res.json({
        status :200,
        data:updatePost,
        message :"Post updated Successfully"
    })
}

export const fetchPosts =async(req,res)=>{
    const Posts =await prisma.post.findMany({
        include:{
            comment :{
                include :{
                    user:{
                        select:{
                            name :true,
                        }
                    }
                }
            }
          }
    }) //return in array all data
    // meant this function findMany return array

    return res.json({
        status :200,
        // count :users.length(),
        data  :Posts,
        message:"All Posted data fetch"
    })
}

export const showPost =async(req,res)=>{
    const postId =req.params.id;
    const post =await prisma.post.findFirst({
        where:{
            id :Number(postId)
        }
    }) //this findFirst retrun as object only
    return res.json({
        status :200,
        data :post,
        message:"Showing post still created"
    })
}

export const deletePost =async(req,res)=>{
    const PostId =req.params.id;
    const post =await prisma.post.delete({
        where:{
            id :Number(PostId)
        }
    })
    return res.json({
        status :200,
        data :post,
        message :"Above user deleted "
    })
}