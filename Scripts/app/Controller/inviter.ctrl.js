ngAppInviter.controller('InviterController', ['$scope', function($scope) {
    $scope.addedEmail = "";
    const stringGenerator = function(maxLength){
        return Math.random().toString(36).substring(2, maxLength);
    }

    $scope.generateEmail = function(){
        const generatedEmail = stringGenerator(15).substring(0,Math.ceil(Math.random()*12)) 
        + "@" + stringGenerator(Math.ceil(Math.random()*8)+2) 
        + "." + stringGenerator(Math.ceil(Math.random()*4)+3).replace(/\d/g, "");//Заменяю числа пустой строкой, чтобы уменьшить вероятность генерации невалидного email
        $scope.addedEmail = generatedEmail;
    }
    
    $scope.emailCount = function(){
        if (Array.isArray($scope.emails) && $scope.emails.length > 0){
            const validEmails = $scope.emails.filter(item => !!item.validEmail).length;
            window.alert(`Total emails ${$scope.emails.length}. Valid emails ${validEmails}, invalid emails ${$scope.emails.length - validEmails}`);
        }else{
            window.alert(`Component is empty.`)
        }
    }
}]);