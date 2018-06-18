(function(){
 
 myapp.directive("mySelect",function($filter,$document){
   return{
     restrict:"EA",
     scope:{
     	mycity:'=',
     	watermark:'@',
     	ddmodel:'='
     },
     templateUrl:"template/select.html",
     link:function(scope,attr){
       scope.hidedd = true;
       scope.mytext = scope.mycity;   
       scope.copyarr = angular.copy(scope.ddmodel);
       scope.item = $filter('filter')(scope.ddmodel,{desc:scope.mytext});

       scope.keyEnter= function(term){
           scope.hidedd = false;
             scope.$watch('mytext', function(val){ 
                    scope.ddmodel = $filter('filter')(scope.copyarr,{desc:val});
             });
       };
       scope.showDropdown = function(term){
       	     scope.hidedd = scope.hidedd ? false : true;             
       };        
       scope.selectData = function(event,item){

          var ele = angular.element(event.target);
          ele.parent().parent(".dropdown").children().find('li').removeClass('selected');
          scope.mytext = event.target.innerHTML;
          //item.isSelected = true; 
          ele.addClass('selected');
          scope.hidedd = true;
       };
        
        $document.on("click",function(event){ 
        	scope.hidedd = true;
        });


     }
     
   }
  
 })

})();