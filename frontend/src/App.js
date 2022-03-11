import logo from "./logo.svg";
import "./App.css";
import TableIssues from "./TableIssues";
import { appendOwnerState } from "@mui/material";

function App() {
  const test = () => {
    var array = [-1, -3, -7, -5, 1, 10, -2];
    var uniq = [...new Set(array)];
    uniq.sort();
    var missing_val = [];
    for (var i = 1, k = uniq[uniq.length - 1]; i < k; i++) {
      if (!uniq.includes(i)) {
        missing_val.push(i);
      }
    }
    console.log(uniq);
    if (uniq[uniq.length - 1] < 0) {
      return 1;
    }
    if (missing_val.length === 0) {
      return uniq[uniq.length - 1] + 1;
    } else {
      missing_val.sort();
      return missing_val[0];
    }
  };
  const froga = (blocks, i) => {
    let n = blocks.length;
    let na = i,
      j = 0;
    let jump = true;

    for (j = i; j < n; j++) {
      if (blocks[j] <= blocks[j + 1]) {
        na++;
      } else {
        j = n;
      }
    }
    return na;
  };
  const frogb = (blocks, i) => {
    let nb = i,
      j = i;

    let jump = true;

    for (j; j >= 0; j--) {
      if (blocks[j] <= blocks[j - 1]) {
        nb--;
      } else {
        j = 0;
      }
    }

    return nb;
  };
  const test3 = () => {
    let blocks = [1, 1, 9, 8, 7, 6, 7, 8, 8, 9];
    let i = 0,
      na = 0,
      nb = 0;
    let n = blocks.length;
    let temp = [];

    for (i; i < n; i++) {
      if (i === 0) {
        na = froga(blocks, i);
        temp.push(na - nb + 1);
      } else {
        na = froga(blocks, i);
        nb = frogb(blocks, i);
        console.log(na, nb);
        temp.push(na - nb + 1);
      }
    }

    return Math.max(...temp);
  };

  function Sumnumber(n) {
    let sum = 0;
    console.log(n);
    while (n) {
      sum += n % 10;
      console.log(sum);
      n = Math.floor(n / 10);
      console.log(n);
    }
    return sum;
  }
  function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    let map = new Map();
    let ans = -1,
      X = 0,
      Y = 0;
    for (let i = 0; i < n; i++) {
      let temp = Sumnumber(A[i]);

      if (!map.has(temp)) {
        map.set(temp, 0);
      }
      if (map.get(temp) != 0) {
        if (A[i] + map.get(temp) > ans) {
          X = A[i];
          Y = map.get(temp);
          ans = X + Y;
        }
      }
      map.set(temp, Math.max(A[i], map.get(temp)));
    }
    return ans;
  }
  const test2 = (A) => {
    let B = A.sort();
    let unique = [...new Set(B)];
    let k = unique[unique.length - 1];
    let ans = 1;
    let j = 0;
    let somethingmissing = false;
    unique = unique.filter((x) => x > -1);
    if (unique.length === 0 || unique[0] !== 1) {
      return 1;
    } else {
      console.log(unique);
      let i = unique[0];
      for (i; i <= unique.length; i++) {
        console.log(unique[j], i);
        if (unique[j] !== i) {
          somethingmissing = true;
          ans = i;
          i = unique[unique.length];
        }
        j++;
      }
    }

    if (somethingmissing) {
      return ans;
    } else {
      return k + 1;
    }
  };

  const efficiencost = (arr, threshold) => {
    //let sum1 = sumarray(arr)

    let cost = [];
    for (let i = 1; i <= threshold; i++) {
      let temp = 0;
      console.log(arr.length);
      for (let j = 1; j <= arr.length; j++) {
        console.log(arr[j * i - 1]);
        temp += arr[j * i - 1];
      }

      cost.push(temp);
    }
    cost.reverse();
    return cost[0];
  };
  // const lastStoneWeight = (weights) => {
  //   // Write your code here
  //   weights.sort();
  //   console.log(weights);
  //   if (weights.length === 1) {
  //     return weights[0];
  //   }
  //   while (weights.length != 1) {
  //     if (weights[weights.length - 1] === weights[weights.length - 2]) {
  //       weights.pop();
  //       weights.pop();
  //       console.log(weights);
  //     } else if (weights[weights.length - 1] > weights[weights.length - 2]) {
  //       let temp = weights[weights.length - 1];
  //       let diff = weights[weights.length - 1] - weights[weights.length - 2];

  //       weights.pop();
  //       weights.pop();
  //       weights.push(diff);

  //       console.log(weights.length);
  //     } else if (weights[weights.length - 1] < weights[weights.length - 2]) {
  //       let temp = weights[weights.length - 2];
  //       let diff = weights[weights.length - 2] - weights[weights.length - 1];
  //       weights.pop();
  //       weights.pop();
  //       weights.push(diff);
  //       console.log(weights);
  //     }
  //     console.log(weights.length);
  //   }
  //   return weights[0];
  // };
  let count = 0;
  const vowelsubstring = (s) => {
    // Write your code here
    let arraystring = s.split("");
    let sum = 0;
    let arraytemp = [];
    for (let i = 0; i < arraystring.length; i++) {
      let consonantindex = findconsonant(i, arraystring);
      console.log("consonantindex", consonantindex);
      arraytemp = arraystring.splice(i, consonantindex);
      arraystring = s.split("");
      console.log("array", arraytemp);
      cekcontainvowel(arraytemp, 0);
      console.log("count", count);
      // sum += count;
    }
    return count;
  };

  const cekcontainvowel = (word) => {
    const vowel = ["a", "i", "u", "e", "o"];
    let status = true;

    vowel.map((v) => {
      if (!word.includes(v)) {
        status = false;
      }
    });
    if (status) {
      count++;
      word.pop();
      cekcontainvowel(word, count);
    } else {
      console.log("count", count);
    }
  };
  const findconsonant = (startindex, array) => {
    const vowel = ["a", "i", "u", "e", "o"];
    let passindex = 0;
    for (let i = startindex; i < array.length; i++) {
      if (vowel.includes(array[i])) {
        passindex++;
      } else {
        break;
      }
    }
    console.log("pas", passindex);
    return passindex;
  };

  const bulldogprint = () => {
    for (let i = 1; i <= 100; i++) {
      let bull = false;
      let dog = false;

      if (i % 4 === 0 || digitSum(i) === 4 || contain(i, 4)) {
        bull = true;
      }

      if (i % 8 === 0 || digitSum(i) === 8 || contain(i, 8)) {
        dog = true;
      }
      let string = bull && dog ? "BullDog" : bull ? "Bull" : dog ? "Dog" : i;
      console.log(string);
      bull = false;
      dog = false;
    }
  };
  const digitSum = (n) => {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  const contain = (i, number) => {
    let temp = false;
    let s = i.toString();
    let arr = s.split("");
    arr.map((a) => {
      if (a == number) {
        temp = true;
      }
    });
    return temp;
  };

  const heximal = (n) => {
    let res = 0;

    let arr = [];
    while (n) {
      res = n % 6;
      arr.push(res);
      n = n - res;
      n = n / 6;
    }

    return arr.reverse().join("");
  };

  return (
    <div className="App">
      <TableIssues />
      {/* {console.log(test())} */}
      {/* {console.log(solution([51, 71, 17, 42]))} */}
      {/* {console.log(Sumnumber(7965))} */}
      {/* {console.log(test2([1, 7, 2, 6, 4, 8, -5, -7, -1]))} */}
      {/* {console.log(efficiencost([1, 2], 1))} */}
      {/* {console.log(lastStoneWeight([1, 2, 3, 4, 7, 7, 8, 8]))} */}
      {/* {console.log(vowelsubstring("aaeiouuxaiueo"))} */}
      {/* {bulldogprint()} */}
      {/* {contain(41, 4)} */}
      {/* {heximal(12)} */}
    </div>
  );
}

export default App;
const arr = [
  46188086, 339992587, 742976890, 801915058, 393898202, 717833291, 843435009,
  361066046, 884145908, 668431192, 586679703, 792103686, 85425451, 246993674,
  134274127, 586374055, 923288873, 292845117, 399188845, 842456591, 410257930,
  333998862, 16561419, 624279391, 459765367, 969764608, 508221973, 82956997,
  437034793, 553121267, 554066040, 199416087,
];
