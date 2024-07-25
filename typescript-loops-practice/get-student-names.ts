/* exported getStudentNames */
interface Name {
  name: string;
}
function getStudentNames(student: Name[]): string[] {
  const newArray: string[] = [];
  for (const key of student) {
    newArray.push(key.name);
  }
  return newArray;
}
