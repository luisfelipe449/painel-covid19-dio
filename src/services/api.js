import axios from 'axios';

// Quer usar async/await? Adicione o prefixo `async` na sua função/método
async function getData() {
    try {
      const response = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/brazil');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  export default getData;