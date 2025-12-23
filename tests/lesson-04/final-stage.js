function findPairsDivisibleBy17() {
  const pairs = [];
  for (let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
        const sum = i + j;
        if (sum % 17 === 0){
            pairs.push({
                pairs: [i,j],
                sum: sum
            })
        }
    }
  }
  
  return {
    pairs: pairs,
    pairsCount: pairs.length
  }
}

const result = findPairsDivisibleBy17();
console.log(result.pairs)
result.pairs.forEach(p => {
    console.log(`(${p.pairs[0]} ,${p.pairs[1]}) = ${p.sum}`);    
})
console.log(`Tổng số cặp là ${result.pairsCount}`);
