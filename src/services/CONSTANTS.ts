const ROOT = "https://localhost:5001";

export const GET_ALL_PROJECTS = () => ROOT + "/Project";
export const GET_PROJECT = () => ROOT + "/Project/";
export const CREATE_PROJECT = () => GET_PROJECT() + "create";

export const GET_ALL_TASKS = () => ROOT + "/Task";
export const GET_TASK = () => ROOT + "/Task/";
export const CREATE_TASK = () => GET_TASK() + "create";

export const GET_ALL_USERS = () => ROOT + "/User";
export const GET_USER = () => ROOT + "/User/";
export const CREATE_USER = () => GET_USER() + "create";
