// it makes an api call
;
export async function getJoke(){
    const URL = import.meta.env.VITE_URL;
   const response =  await fetch(URL);
   const obj = await response.json(); //deserialization.
   return obj// wrapped in promise
}