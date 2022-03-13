var a=[123, null, true, 167, false, "olma", ["salom", null, false]];

for(i=0;  i<a.length; i++){
    if(typeof a[i]==="number"){
        delete a[i];
    }
}

console.log(a);