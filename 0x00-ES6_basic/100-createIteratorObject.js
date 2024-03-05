export default function* createIteratorObject(report) {
  for (const department of Object.values(report.allEmployees)) {
    yield* department;
  }
}
