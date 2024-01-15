import axios from 'axios';

export async function getTemplateData() {
  try {
    const response = await axios.get(process.env.REACT_APP_TEMPLATES_URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
