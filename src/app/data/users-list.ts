import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
  {
    name: "João Silva",
    email: "joao.silva@example.com",
    password: "senha-segura-123",
    age: 30,
    address: {
      street: "Rua das Flores",
      number: 42,
      city: "São Paulo",
      state: "SP",
      country: "Brasil"
    },
    phone: "1112345678",
    isActive: true,
    role: "Desenvolvedor",
    registrationDate: "2023-08-01T09:00:00.000Z",
    status: {
      online: true,
      verified: true,
      subscriptionActive: true,
      lastAccess: "2023-08-02T09:00:00.000Z"
    }
  },
  {
    name: "Maria Fernandes",
    email: "maria.fernandes@example.com",
    password: "Maria123",
    age: 25,
    address: {
      street: "Avenida do Sol",
      number: 100,
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil"
    },
    phone: "21956789101",
    isActive: false,
    role: "Designer",
    registrationDate: "2023-08-05T09:00:00.000Z",
    status: {
      online: false,
      verified: false,
      subscriptionActive: false,
      lastAccess: "2023-08-06T09:00:00.000Z"
    }
  },
  {
    name: "Carlos Pereira",
    email: "carlos.pereira@example.com",
    password: "Carlos456",
    age: 40,
    address: {
      street: "Praça da Liberdade",
      number: 5,
      city: "Belo Horizonte",
      state: "MG",
      country: "Brasil"
    },
    phone: "31911121314",
    isActive: true,
    role: "Gerente",
    registrationDate: "2023-08-10T09:00:00.000Z",
    status: {
      online: false,
      verified: true,
      subscriptionActive: false,
      lastAccess: "2023-08-12T09:00:00.000Z"
    }
  },
  {
    name: "Ana Sousa",
    email: "ana.sousa@example.com",
    password: "Ana789",
    age: 22,
    address: {
      street: "Rua das Pedras",
      number: 80,
      city: "Porto Alegre",
      state: "RS",
      country: "Brasil"
    },
    phone: "51915161718",
    isActive: false,
    role: "Analista",
    registrationDate: "2023-08-15T09:00:00.000Z",
    status: {
      online: true,
      verified: false,
      subscriptionActive: true,
      lastAccess: "2023-08-18T09:00:00.000Z"
    }
  },
  {
    name: "Pedro Mendes",
    email: "pedro.mendes@example.com",
    password: "Pedro012",
    age: 35,
    address: {
      street: "Boulevard Central",
      number: 60,
      city: "Recife",
      state: "PE",
      country: "Brasil"
    },
    phone: "81919202122",
    isActive: true,
    role: "Diretor",
    registrationDate: "2023-08-20T09:00:00.000Z",
    status: {
      online: false,
      verified: true,
      subscriptionActive: false,
      lastAccess: "2023-08-25T09:00:00.000Z"
    }
  }
];
