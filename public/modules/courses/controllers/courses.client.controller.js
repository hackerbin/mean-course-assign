'use strict';

// Courses controller
angular.module('courses').controller('CoursesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Courses',
    function ($scope, $stateParams, $location, Authentication, Courses) {
        $scope.authentication = Authentication;

        // Create new Course
        $scope.create = function () {
            // Create new Course object
            var course = new Courses({
                title: this.title,
                courseCode: this.courseCode,
                category: this.category,
                section: this.section,
                semester: this.semester,
                day: this.day,
                startTime: this.startTime,
                endTime: this.endTime
            });

            // Redirect after save
            course.$save(function (response) {
                $location.path('courses/' + response._id);

                // Clear form fields
                $scope.title = '';
                $scope.courseCode = '';
                $scope.category = '';
                $scope.section = '';
                $scope.semester = '';
                $scope.day = '';
                $scope.startTime = Date.now
                $scope.endTime = Date.now;
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Remove existing Course
        $scope.remove = function (course) {
            if (course) {
                course.$remove();

                for (var i in $scope.courses) {
                    if ($scope.courses [i] === course) {
                        $scope.courses.splice(i, 1);
                    }
                }
            } else {
                $scope.course.$remove(function () {
                    $location.path('courses');
                });
            }
        };

        // Update existing Course
        $scope.update = function () {
            var course = $scope.course;

            course.$update(function () {
                $location.path('courses/' + course._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        // Find a list of Courses
        $scope.find = function () {
            $scope.courses = Courses.query();
        };

        // Find existing Course
        $scope.findOne = function () {
            $scope.course = Courses.get({
                courseId: $stateParams.courseId
            });
        };
    }
]);
