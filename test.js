const studentGrades = {};
const studentIDs = ['id_101', 'id_102', 'id_103', 'id_104'];

for (let i = 0; i < studentIDs.length; i++) {
  const currentID = studentIDs[i];
  studentGrades[currentID] = 'N/A'; // Use bracket notation to set a dynamic key
}

console.log(studentGrades);