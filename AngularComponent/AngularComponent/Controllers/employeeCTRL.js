
myApp.controller("employeeCTRL", function ($scope, Employee, $interval) {
    var employees = new Array();
    var interval = null;
    $scope.empArray = [];
    Employee.get().then(function (response) {
        employees = response.data.employees;
        employees.sort(compare);
        $scope.empArray.push(employees[0])
    }), function (response) {
        console.log(response.statusText);
    }
    function compare(a, b) {
        if (a.Score > b.Score)
            return -1;
        if (a.Score < b.Score)
            return 1;
        return 0;
    }
    interval = $interval(callInterval, 1500);
    var i = 1;
    function callInterval() {
        if (i < employees.length) 
            $scope.empArray.push(employees[i])
        else 
            $interval.cancel(interval);
        i++;
    }
});
