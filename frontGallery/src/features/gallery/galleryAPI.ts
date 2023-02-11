import axios from "axios";
import { IImg } from "../../model/IImg";

const MY_SERVER = "http://127.0.0.1:8000/students"
const MY_SERVER_id = "http://127.0.0.1:8000/students/<pk>"

export function getstudents() {
  return new Promise<{ data: IImg[] }>((resolve) =>
    axios.get(MY_SERVER).then(res=>resolve({data: res.data}))
  );
}
export function delstudents(id: number) {
  return new Promise<{ data: IImg[] }>((resolve) =>
    axios.delete(MY_SERVER + '/' + id).then(res=>resolve({data: res.data}))
  );
}
// export function delstudents(id: number) {
//     axios.delete(`${MY_SERVER_id}/ ${id}`);
// }
