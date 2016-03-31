var generateCourseAccessLastDayData = require('CourseAccess/course-access-data.js').generateLast,
    generateGradesData = require('Grades/grades-data.js').generate,
    generatePredictedGradesData = require('Grades/predicted-grades-data.js').generate;

// Last Day of Course Access of specified user for Course
Sandbox.define('/v1/aggregates/10000/data/{orgUnitId}/{userId}','GET', function(req, res) {
    var result = generateCourseAccessLastDayData(req.params.orgUnitId, req.params.userId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});//

// Last Day of Course Access of all users for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/10000/data/{orgUnitId}','GET', function(req, res) {
    var result = generateCourseAccessLastDayData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Current Grade of all users for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/20000/data/{orgUnitId}','GET', function(req, res) {
    var result = generateGradesData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});

// Predicted Grade of all users for Course - NEW ROUTE
Sandbox.define('/v1/aggregates/30000/data/{orgUnitId}','GET', function(req, res) {
    var result = generatePredictedGradesData(req.params.orgUnitId);

    res.type('application/json');
    res.status(200);
    res.json(result);
});