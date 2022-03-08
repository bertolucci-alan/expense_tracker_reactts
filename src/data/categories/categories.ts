import { CategoryType } from "./types"

export const categories: CategoryType = {
    food: {
        title: 'Alimentação',
        color: '#403bcc',
        expense: true
    },
    rent: {
        title: 'Aluguel',
        color: '#c71654',
        expense: true
    },
    salary: {
        title: 'Salário',
        color: '#048a2e',
        expense: false
    },
}