import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const getUserData = async (name) => {
  try {
    const { data } = await client.get(name);
    console.log("[SUCCESS] GET user data", data);
    return data;
  } catch (e) {
    console.log("[FAIL] GET user data", e);
  }
};
