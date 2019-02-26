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
            let enterKey = 13,
            commaKey = 44,
            ctrlKey = 17,
            vKey = 86;
            if(!Array.isArray(scope.inviterEmails)) {
                scope.inviterEmails = [];
            }   
            
            const addEmail = (event) => {
                let emailValue = event.target.value;
                if(typeof emailValue === "string" && emailValue.length > 0){
                    //taken from https://github.com/Microsoft/referencesource/blob/master/System.ComponentModel.DataAnnotations/DataAnnotations/EmailAddressAttribute.cs
                    const emailValidationRegExt = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
                    
                    scope.inviterEmails.push({emailValue, validEmail: emailValidationRegExt.test(emailValue)});
                    scope.email = "";
                    ngModel.$setViewValue(scope.inviterEmails);
                    event.target.blur();
                }
            }

            element.on('keypress', function(event){ 
                       
                if(event.keyCode == enterKey || event.keyCode == commaKey){
                    addEmail(event);                    
                }
            });

            element.on('keydown', function(event){ 
                if (event.ctrlKey == true && event.keyCode == vKey){
                    setTimeout(() => addEmail(event));
                                    } 
            });

            element.on('focusout', function(event){
                addEmail(event);
                //event.target.style.width = (event.target.parentElement.offsetWidth - angular.element(document.querySelector("span.apps-share-chips-container.ng-scope"))[0].offsetWidth).toString();
            });

            scope.deleteInviterEmail = function(index){
                scope.inviterEmails.splice(index, 1);
                
            }

            
                
                //scope.email.$setViewValue("");
            
        }
    }
}]);