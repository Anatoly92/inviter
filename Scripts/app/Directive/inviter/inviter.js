ngAppInviter.directive('inviter',[function(){
    return {
        restrict: "E",
        scope: {
           
        },
        require: 'ngModel',
        replace: true,
        templateUrl: "Scripts/app/Directive/inviter/inviter.html",
        //controller: function($scope){        },
        link: function(scope, element, attrs, ngModel){
            if(!Array.isArray(scope.inviterEmails)) {
                scope.inviterEmails = [];
            }   
            
            const addEmail = () => {
                scope.inviterEmails.push(event.target.value);
                scope.email = "";
            }

            element.one('keypress', function(event){          
                if(event.keyCode == 13 || event.keyCode == 44){
                    debugger;
                    addEmail();
                    ngModel.$setViewValue(scope.inviterEmails);
                    event.preventDefault();
                }
            });

            element.one('focusout', function(event){
                debugger;
                addEmail();
                scope.inviterEmails.push(event.target.value);
                scope.email = "";
            });

            scope.deleteInviterEmail = function(index){
                debugger;
                scope.inviterEmails.splice(index, 1);
                
            }

            
                
                //scope.email.$setViewValue("");
            
        }
    }
}]);