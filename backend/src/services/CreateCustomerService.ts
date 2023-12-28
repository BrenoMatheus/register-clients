import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    
    if (!name) {
      throw new Error("Preencha o nome");
    }
    if (!email) {
      throw new Error("Preencha o email");
    }


    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true
      }
    })

    return customer
  }
}

export { CreateCustomerService };
