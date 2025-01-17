let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Sofa',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCours of Object.values(course)) {
                students += subCours.length;

                for (let i = 0; i < subCours.length; i++) {
                    total += subCours[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteration(students));