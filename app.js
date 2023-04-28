const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin': __dirname+'/example.txt';
let input = fs.readFileSync(filePath).toString().split("\n");
input=input[0].split(" ").map((item)=>+item);

A = input[0]
B = input[1]
C = input[2]

solution(A,B,C);

function solution(A,B,C){
    let result=0;
    if((A===B) && (B===C))//3개 모두 같을 경우
    {
        result=10000+A*1000;
    }
    else if((A===B))//2개만 같을 경우
    {
        result=1000+A*100;
    }
    else if((A===C)){
        result=1000+A*100; 
    }
    else if((B===C)){
        result=1000+B*100; 
    }
    else{
        if((A > B) && (A > C))
        {
            result = A * 100;
        }
        else if ((B > A) && (B > C))
        {
            result = B * 100;
        } 
        else 
        {
            result = C * 100;
        }
    }
    console.log(result);
}