import logo from "./logo.svg";
import "./App.css";
import TableIssues from "./TableIssues";

function App() {
  // const test = () => {
  //   var array = [-1, -3, -7, -5, 1, 10, -2];
  //   var uniq = [...new Set(array)];
  //   uniq.sort();
  //   var missing_val = [];
  //   for (var i = 1, k = uniq[uniq.length - 1]; i < k; i++) {
  //     if (!uniq.includes(i)) {
  //       missing_val.push(i);
  //     }
  //   }
  //   console.log(uniq);
  //   if (uniq[uniq.length - 1] < 0) {
  //     return 1;
  //   }
  //   if (missing_val.length === 0) {
  //     return uniq[uniq.length - 1] + 1;
  //   } else {
  //     missing_val.sort();
  //     return missing_val[0];
  //   }
  // };
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
  const test = () => {
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

  return (
    <div className="App">
      <TableIssues />
      {/* {console.log(test())} */}
      {/* {console.log(solution([51, 71, 17, 42]))} */}
      {console.log(Sumnumber(7965))}
    </div>
  );
}

export default App;
