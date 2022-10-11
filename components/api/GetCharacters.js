export async function GetCharacters(){
    const response = await fetch('https://swapi.dev/api/people')
    const data = await response.json();
    return data;
}

