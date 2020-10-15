
const defaultState = {
    storage : {},
    bedroom : {},
    living : {},
    other : {},
    dining : {},
    choices : {
        storage : true,
        bedroom: false,
        living: false,
        other: false,
        dining: false
    }
}
export default(state = defaultState, action) =>{
    const arr = ['storage', 'bedroom', 'living', 'other', 'dining'];
    if(action.type === 'initDataAction'){
        const newState = JSON.parse(JSON.stringify(state));
        for(let i = 0; i< arr.length; i++){
            action.data[arr[i]].forEach(element => {
                newState[arr[i]][element._uid] = {
                    date: element.date,
                    image: element.image,
                    content: element.content,
                    ig_handle: element.ig_handle
                }
            });
        }
        return newState;
    }
    if(action.type === 'changeChoice'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.choices = action.value;
        return newState;
    }
    if(action.type === 'addItem'){
        const newState = JSON.parse(JSON.stringify(state));
        let id = Math.random()*1000000;
        while(newState.bedroom[id] || newState.living[id] || newState.storage[id] 
            || newState.dining[id] || newState.other[id]){
            id = Math.random()*1000000;
        }
        newState[action.value.type][id] = 
        {
            date: action.value.date,
            image: action.value.image,
            content: action.value.content,
            ig_handle: action.value.ig_handle
        }
        const cho = {
            storage : false,
            bedroom: false,
            living: false,
            other: false,
            dining: false
        }
        cho[action.value.type] = true;
        newState.choices = cho;
        return newState;
    }
    return state;
}
