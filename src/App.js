import "./App.css";
import Layout from "./Layout";

function App() {
  return (
    <section>
      <Layout />
    </section>
  );
}

export default App;

// fizzbuzz challenge
// function fizzbuzz() {
//   let output = [];
//   let count = 1;

//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("fizzbuzz");
//     } else if (count % 3 === 0) {
//       output.push("fizz");
//     } else if (count % 5 === 0) {
//       output.push("buzz");
//     } else {
//       output.push(count);
//     }
//     count++;
//   }
//   return output;
// }

// alert(fizzbuzz());
