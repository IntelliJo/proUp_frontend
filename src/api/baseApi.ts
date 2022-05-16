import axios from "axios";

export const getApi = async (url: string) => {
  try {
    const data = await axios.get(`http://15.164.215.76:8080${url}`);
    console.log(data);
    return data;
  } catch (err) {
    alert("문제가 발생했습니다.");
    console.log(err);
    return err;
  }
};

export const postApi = async (url: string, body?: any) => {
  try {
    const data = await axios.post(`http://15.164.215.76:8080/${url}`, body, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    alert("문제가 발생했습니다.");
    console.log(err);
    return err;
  }
};

export const putApi = async (url: string, body?: any) => {
  try {
    const data = await axios.put(`http://15.164.215.76:8080${url}`, body);
    console.log(data);
    return data;
  } catch (err) {
    alert("문제가 발생했습니다.");
    console.log(err);
    return err;
  }
};

export const patchApi = async (url: string, body?: any) => {
  try {
    const data = await axios.patch(`http://15.164.215.76:8080${url}`, body);
    console.log(data);
    return data;
  } catch (err) {
    alert("문제가 발생했습니다.");
    console.log(err);
    return err;
  }
};

export const deleteApi = async (url: string) => {
  try {
    const data = await axios.delete(`http://15.164.215.76:8080${url}`);
    console.log(data);
    return data;
  } catch (err) {
    alert("문제가 발생했습니다.");
    console.log(err);
    return err;
  }
};
