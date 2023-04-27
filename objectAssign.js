// if (typeof Object.assign !== 'function') {
//     Object.assign = function(target, ...sources) {
//       if (target == null) {
//         throw new TypeError('Cannot convert undefined or null to object');
//       }
//       const output = Object(target);
//       sources.forEach(source => {
//         if (source != null) {
//           for (const key in source) {
//             if (Object.prototype.hasOwnProperty.call(source, key)) {
//               output[key] = source[key];
//             }
//           }
//         }
//       });
//       return output;
//     };
//   }

  Object.assin = function(target, ...sources) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }
      const output = Object(target);
      sources.forEach(source => {
        console.log(source)
        if (source != null) {
          for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              output[key] = source[key];
            }
          }
        }
      });
      return output;
  } 

  let obj = {};

  let source = {
    name: 'Hello',
    age: 34,
    job: 'Freencer'
  }

  let newOutput = Object.assin(obj, source)

  let div = document.createElement('div');

  const styles = {
    color: '#fff',
    backgroundColor: '#000'
  }

  Object.assin(div.style, styles)

