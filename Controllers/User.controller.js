import prisma from '../DB/dbConfig.js'
 constant :{
    name :"vasdf";
    email : "sdfasdf@gmail.com";
    password :"34254"
}

export const createUser =async(req,res)=>{
    const {name,email,password } =req.body;
    // const {name,email,password } =constant;

    // console.log(constant)
    const findUser =await prisma.user.findUnique({
        where:{
            email 
        }
    })

    if(findUser){
        return res.json({
            status :400,
            message : "Email is already Taken"
        })
    }

    const newUser =await prisma.user.create({
        data:{
            name,
            email,
            password  // also given hashed password
        }
    })

    return res.json({
        status :200,
        data :newUser,
        message :"New User is created successfully"
    })
    console.log(res)
}

export const  updateUser =async(req,res)=>{
    const userId =req.params.id; //this type is String --typeScript
    const {name,email,password} =req.body

    const data =await  prisma.user.update({
        where:{
            id :Number(userId)
        },
        data:{
            name,email,password
        }
    })

    return res.json({
        status :200,
        data,
        message :"User updated Successfully"
    })
}

export const fetchUsers =async(req,res)=>{
    const users =await prisma.user.findMany({}) //return in array all data
    // meant this function findMany return array

    return res.json({
        status :200,
        // count :users.length(),
        data  :users,
        message:"All user data fetch"
    })
}

export const showUser =async(req,res)=>{
    const userId =req.params.id;
    const user =await prisma.user.findFirst({
        where:{
            id :Number(userId)
        }
    }) //this findFirst retrun as object only
    return res.json({
        status :200,
        data :user
    })
}

export const deleteUser =async(req,res)=>{
    const userId =req.params.id;
    const user =await prisma.user.delete({
        where:{
            id :Number(userId)
        }
    })
    return res.json({
        status :200,
        data :user,
        message :"Above user deleted "
    })
}