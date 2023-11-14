const EVENTS_URI = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events";

//GET EVENTS
const getParties = async () => {
    try{
        const response = await fetch(EVENTS_URI);
        const json = response.json();
        const parties = json.data;
        if(json.error){
            throw new Error(json.error);
        }
        state.events = parties;
    }catch(error){
        console.error(error);
    }
};

//POST EVENT
const init = async () => {
    const parties = await getParties();
    console.log(parties);
}
init();
const createParty = async (name, description, date, location) =>{
    const response = await fetch(EVENTS_URI,{
        method: "POST",
        headers: {"Content-Type": 'application/json'}
        body: JSON.stringify({name, description, date, location})
});
    const json = await response.json();
    if(json.error){
        throw new Error(json.error);
    }
}catch(error){
    console.error(error);
}


//DELETE EVENT
const deleteParty = async (id) => {
try{
    const response = await fetch(EVENTS_URI + "/" + {method:"DELETE"});
    const json = response.json();
    const parties = json.data;
    if(json.error){
        throw new Error(json.error);
    }
    return parties;
}catch(error){
    console.error(error)
}
};
const init = async () => {
const parties = await getParties();
console.log(parties);
}