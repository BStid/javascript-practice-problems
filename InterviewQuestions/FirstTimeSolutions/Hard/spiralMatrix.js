// function spiralMatrixxIII(R, C, r0, c0) {
//   const spiralMatrix = Array(R)
//     .fill(null)
//     .map(() => Array(C).fill(null));
//   const startingPosition = [r0, c0];
//   let counter = 1;
//   const north = r0 - 1;
//   const south = r0 + 1;
//   const east = c0 + 1;
//   const west = c0 - 1;

//   //   for (let rowIndex = r0; rowIndex <= R - 1; rowIndex++) {
//   //     for (let columnIndex = c0; columnIndex <= C - 1; columnIndex++) {
//   //       if (spiralMatrix[rowIndex][columnIndex] === null) {
//   //         spiralMatrix[rowIndex][columnIndex] = counter;
//   //         counter++;
//   //       }
//   //     }
//   //   }
//   while (r0 <= R - 1) {
//     while (c0 <= C - 1) {
//       if (spiralMatrix[r0][c0] === null) {
//         spiralMatrix[r0][c0] = counter;
//         counter++;
//       }
//       if(c0 == C- 1){
//           r0 = south;
//           if (spiralMatrix[r0][c0] !== null) {

//           }else{
//             spiralMatrix[r0][c0] = counter;
//             counter++;
//             c0--;
//           }
//       }
//     }
//   }
//   console.log(spiralMatrix);
// }

// spiralMatrixxIII(5, 6, 1, 4);

// module.exports = spiralMatrixxIII;
