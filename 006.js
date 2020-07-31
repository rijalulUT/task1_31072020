const string = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

var regex= /[\W_]/g; 
    
const lowRegStr = string.toLowerCase().replace(regex, ' ');
const split = lowRegStr.split(' ')


function censoring (val, index, arr) {
    var next = index + 1;

    // If at the end of array
    // use the first element
    if (next === arr.length) {
        next = 0;
    }
    if(arr[next]=='dolor' || arr[next]=='elit' 
    || arr[next]=='quis'  || arr[next]=='nisi'
    || arr[next]=='fugiat'|| arr[next]=='proident' || arr[next]=='laborum')
    arr[next] = '******'
    
    return arr[next];
}

const filterWord = split.map(censoring).join(' ')
console.log(filterWord)