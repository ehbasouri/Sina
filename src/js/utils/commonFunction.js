
export function sortByAlpha(arr){
    const array = JSON.parse(JSON.stringify(arr))
    array.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })
    return array;
}

export function deSortByAlpha(arr){
    const array = JSON.parse(JSON.stringify(arr))
    array.sort(function(a, b){
        if(a.name > b.name) { return -1; }
        if(a.name < b.name) { return 1; }
        return 0;
    })
    return array;
}

export function sortByAbv(arr){
    const array = JSON.parse(JSON.stringify(arr))
    array.sort(function(a, b){
        if(a.abv < b.abv) { return -1; }
        if(a.abv > b.abv) { return 1; }
        return 0;
    })
    return array;
}

export function deSortByAbv(arr){
    const array = JSON.parse(JSON.stringify(arr))
    array.sort(function(a, b){
        if(a.abv > b.abv) { return -1; }
        if(a.abv < b.abv) { return 1; }
        return 0;
    })
    return array;
}