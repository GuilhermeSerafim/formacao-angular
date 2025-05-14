import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options";


// Pure Functional Programming
const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    // Boa prática - É melhor pegarmos o parametro do que puxar mais uma vez a varíavel externa
    filteredList = filteredUsersListByName(filterOptions.name, usersList);
    // Construindo cascata
    filteredList = filteredUsersListByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
}

const filteredUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) return usersList;

    return usersList.filter((user) => user.name.toLowerCase().includes(name.toLocaleLowerCase()));
}

const filteredUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) return usersList;

    return usersList.filter((user) => user.isActive === status);
}

// Estamos chamando de userList o 3ª parametro, pois não importa para a função se está filtrada ou não 🤷‍♀️
const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, userList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) return userList;

    return userList.filter((user) => isWithinInterval(new Date(user.registrationDate), {
        start: startDate, // Include
        end: endDate // Exclude
    }));
}

export default filterUsersList;