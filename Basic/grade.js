// Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

    // If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.

    // If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.

    // If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'



function grading(totalMarks, examType) {
    if (examType == true) {
        if(totalMarks >= 90) {
            return `A+ in FINAL? ${true}`
        } else {
            return `A+ in FINAL? ${false}`
        }
    } else {
        if (totalMarks >= 89 && totalMarks <= 100) {
            return `A+ in REGULAR? ${true}`
        } else {
            return `A+ in REGULAR? ${false}`
        }
    }

}

console.log(`Aosaf: ${grading(89, true)}`)
console.log(`Abrar: ${grading(98)}`)
console.log(`Aukik: ${grading(100, true)}`)
console.log(`Shaktiman: ${grading(89)}`)
console.log(`Abesh: ${grading(58, true)}`)