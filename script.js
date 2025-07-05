document.getElementById('gradeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const kinderyrs = parseInt(document.getElementById('kinderyrs').value) || 5;
    const currentYear = new Date().getFullYear();
    const targetYear = parseInt(document.getElementById('targetYear').value);
    const birthYear = currentYear - currentAge;
    
    function showMessage(message) {
        document.getElementById('result').innerText = message;
        setTimeout(() => {
            document.getElementById('result').innerText = '';
        }, 5000);
    }
    if (isNaN(currentAge) || currentAge < 1 || currentAge > 50) {
        showMessage('Invalid Age or should be less than 50');
        return;
    }
    if (isNaN(targetYear) || targetYear < 1950 || targetYear > 2099) {
        showMessage('Target year must be between 1950 - 2099');
        return;
    }
    if (isNaN(kinderyrs) || kinderyrs < 0 || kinderyrs > 15) {
        showMessage('kindergarten years must be between 0 - 15');
        return;
    }
    if (!isNaN(currentAge) && !isNaN(targetYear)) {
        if (targetYear < birthYear) {
            document.getElementById('result').innerText = `Seriously? you were not born yet!`;
        }else if (targetYear - birthYear > 29) {
            document.getElementById('result').innerText = 'Bro relax get a life;';
        }else if (targetYear > birthYear +17) {
            document.getElementById('programGroup').style.display = 'block';
                const programType = document.getElementById('programType').value;
                const yearsInSchool = targetYear - birthYear;
                let grade;

                if (programType === 'bachelor') {
                    grade = yearsInSchool - kinderyrs;
                    if ((grade > 12) && (grade < 18)) {
                        const degreeYear = grade - 12;
                        document.getElementById('result').innerText = `Year ${targetYear}, Bachelor's degree year ${degreeYear}`;
                    }
                    // else if (grade > 15) {
                    //     const degreeYear = grade - 16;
                    //     document.getElementById('result').innerText = `In the year ${targetYear}, you would be in your Master's degree year ${degreeYear}.`;
                    // }
                    else {
                         document.getElementById('result').innerText = `Year ${targetYear}, Grade ${grade}`;
                    }
                } else if (programType === 'master') {
                    grade = yearsInSchool - kinderyrs;
                    if ((grade > 16) && (grade < 19) ) {
                        const degreeYear = grade - 16;
                        document.getElementById('result').innerText = `Year ${targetYear}, Master's degree year ${degreeYear}`;
                    } 
                    // else if (grade > 12) {
                    //     const degreeYear = grade - 12;
                    //     document.getElementById('result').innerText = `In the year ${targetYear}, you would be in your Bachelor's degree year ${degreeYear}.`;
                    // } 
                    else {
                        document.getElementById('result').innerText = `Year ${targetYear}, Grade ${grade}`;
                    }
                }
        } else {
            const ageInTargetYear = targetYear - birthYear;
            const gradeInTargetYear = ageInTargetYear - kinderyrs;
            
            if (gradeInTargetYear < 1) {
                document.getElementById('result').innerText = `Year ${targetYear}, you were not in school yet`;
            } else {
                document.getElementById('result').innerText = `Year ${targetYear}, you were in Grade ${gradeInTargetYear}`;
            }
        }
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
});
