import axios from "axios";

const baseURL = "http://localhost:8089/api/v1/getAllEmployeeInfo";
class EmployeeService{

    getEmployees(){
        return axios.get(baseURL);
    }

    addEmployee(employee){
        return axios.post(baseURL,employee);
    }
}

export default new EmployeeService()