//Zadatak

const firstTask=()=>{
    const voce=prompt("Unesite listu sa vocem:");
    const nizVoca=voce.split(",");
    if(nizVoca.includes("jagoda")){
        return `Jagoda se nalazi na ${nizVoca.indexOf("jagoda")+1}poziciji.`;
    }else{
        nizVoca.sort();
        nizVoca.unshift(10);
        nizVoca.push(100);
    }
    return nizVoca;
}
console.log(firstTask());