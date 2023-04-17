const COHORT_NAME = "2301-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`;

export async function fetchAllPost() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
fetchAllPost();
