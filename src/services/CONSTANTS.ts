const ROOT = "https://localhost:5001";

export const GET_ALL_PROJECTS = () => ROOT + "/Project";
export const GET_PROJECT = () => ROOT + "/Project/";
export const CREATE_PROJECT = () => GET_PROJECT() + "create";
