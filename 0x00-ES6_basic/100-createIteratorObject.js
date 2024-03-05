export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (const department of Object.values(report.allEmployees)) {
        for (const employee of department) {
          yield employee;
        }
      }
    }
  };
}
