function calculateTax(income, expenses) {
    if ((income < 0 || expenses < 0) || (expenses > income)) {
        return `Invalid Input`
    } else {
        const diff = income - expenses
        const tax = diff * (20 / 100)
        return tax
    }
}


function sendNotification(email) {
    let arr = email.split('')
    if (!(arr.includes('@'))) {
        return `Invalid Email`
    } else {
        arr = email.split('@')
        return `${arr[0]} sent you an email from ${arr[1]}`
    }
}


function checkDigitsInName(name) {
    if (!(typeof(name) === 'string')) {
        return `Invalid Input`
    } else {
        let hasNum 
        for (let i = 0; i < name.length; i++) {
            let index = Number(name[i])
            if (index >= 0 && index <= 9) {
                hasNum = true
                break
            } else {
                hasNum = false
            }
        }
        return hasNum ? true : false
    }
}

function calculateFinalScore(obj) {
    if (!(typeof(obj) === 'object')) {
        return `Invalid Input`
    } else {
        let testScore
        let schoolGrade
        if (obj.testScore > 50) {
            console.log(`Test Score is Maximum 50`);
        } else {
            testScore = obj.testScore
        }
        if (obj.schoolGrade > 30) {
            console.log(`School Grade is Maximum 30`);
        } else {
            schoolGrade = obj.schoolGrade
        }
        let totalMarks = testScore + schoolGrade
        obj.isFFamily === true ? totalMarks = totalMarks + 20 : totalMarks
        return totalMarks >= 80 ? true : false
    }
}


function  waitingTime(waitingTimes, serialNumber) {
    if (!((Array.isArray(waitingTimes)) && typeof(serialNumber) === "number")) {
        return `Invalid Input`
    } else {
        if (serialNumber > waitingTimes.length) {
            let sum = 0
            for (let i = 0; i < waitingTimes.length; i++) {
                sum = sum + waitingTimes[i]
            }
            const average = Math.round(sum / waitingTimes.length)
            const frontAhead = serialNumber - 1
            const waitingTime = (frontAhead - waitingTimes.length) * average
            return waitingTime
        } else {
            return `Viva is already Done`
        }
    }
}









