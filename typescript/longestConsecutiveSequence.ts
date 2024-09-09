const numbers =  [100,4,200,1,3,2]
let longest = 0 
for (const num of numbers) {
    if (!numbers.includes(num - 1)){
        let temp = 0 ;
        let n = num
        while (numbers.includes(n++) ){
temp ++
        }
        longest = longest > temp ? longest : temp
    }
}


console.log(longest)