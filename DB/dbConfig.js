import {PrismaClient} from '@prisma/client'

const prisma =new PrismaClient({
    // to print queries in terminal
    log :["query"]
});

export default prisma


