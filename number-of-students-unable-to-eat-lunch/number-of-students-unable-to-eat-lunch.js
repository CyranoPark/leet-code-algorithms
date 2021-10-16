/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const queue = [];
    const length = students.length;
    
    for (let i = 0; i < length; i++) {
        const student = students[i];
        const sandwich = sandwiches.shift();

        if (student !== sandwich) {
            queue.push(student);
            sandwiches.unshift(sandwich);
        }
    }

    if (queue.length === students.length) {
        return sandwiches.length;
    }

    return countStudents(queue, sandwiches);
};