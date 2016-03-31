myApp.controller('aboutController',function($scope,$rootScope){
    toastr.options.showMethod = 'slideDown';
											toastr.options.hideMethod = 'slideUp';
											toastr.options.closeMethod = 'slideUp';
    
    $rootScope.headerName="About"
    $scope.ok=true;
    $scope.cancel=false;
    //$scope.imageShow=false;
    $scope.imageArray=[
                    'img/1.jpg',
                    'img/2.jpg',
                    'img/3.jpg',  
                     'img/4.png',
                        'img/5.png',
                        'img/6.png',
                        'img/7.png',
                        'img/8.png',
                        'img/9.png',
                        'img/10.png',
                        'img/11.png',
                        'img/12.png',
                        'img/13.png',
                        'img/14.png',
                        'img/15.png',
                        'img/16.png'

                      ];
    
    
    $scope.isActive=0;
    $scope.currentImageIndex=0;
    $scope.showPreviousImage=function(){
        console.log($scope.currentImageIndex)
        console.log($scope.imageArray.length)
        if($scope.currentImageIndex!=0)
        if($scope.isImageSelected($scope.imageArray[$scope.currentImageIndex-1]))
            {
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
                $scope.ok=true;
            $scope.cancel=false;
            }
        if($scope.currentImageIndex!=0){
        $scope.imagePath=$scope.imageArray[$scope.currentImageIndex-1];
        $scope.currentImageIndex=$scope.currentImageIndex-1;
            }
        
    }
    $scope.showNextImage=function(){
        console.log($scope.currentImageIndex)
        console.log($scope.imageArray.length)
        if($scope.isImageSelected($scope.imageArray[$scope.currentImageIndex+1]))
            {
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
                $scope.ok=true;
            $scope.cancel=false;
            }
        if($scope.currentImageIndex+1!=$scope.imageArray.length)
            {
        $scope.imagePath=$scope.imageArray[$scope.currentImageIndex+1];
        $scope.currentImageIndex=$scope.currentImageIndex+1;
                }
    }
        $scope.imagePath=$scope.imageArray[0];
    $scope.setImage=function(image,index){
        if($scope.isImageSelected(image))
            {
                
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
            $scope.ok=true;
            $scope.cancel=false;
            }
        $scope.imagePath=image;
        $scope.currentImageIndex=index;
        $scope.isActive=index;
        
        //$scope.imageShow=true;
    }
    $scope.selectedImagesArray=[];
    $scope.selectImage=function(image){
        if($scope.isImageSelected(image))
            {
                
            $scope.ok=false;
            $scope.cancel=true;    
            }
        else
            {
            $scope.ok=true;
            $scope.cancel=false;
            }
        $scope.flag=1;
        if($scope.selectedImagesArray.length==0)
            {
                $scope.ok=false;
            $scope.cancel=true;
                toastr.remove();    
                toastr
					.success("image Added ");
                $scope.selectedImagesArray.push(image)
                
                
            }
        
        else{
        angular.forEach($scope.selectedImagesArray, function(value, key) {
            if(value==image)   
    {
                             var index = $scope.selectedImagesArray.indexOf(image);//find the index of player record
		                     $scope.selectedImagesArray.splice(index,1)
                             toastr.remove();
        
                             toastr
					.info("image Removed");
                            // alert('image Removed'+index)
                             $scope.flag=0
                             $scope.ok=true;
            $scope.cancel=false;
                             
     }               
                
});          if($scope.flag)
            {
                $scope.ok=false;
            $scope.cancel=true;
                   toastr.remove();             
                toastr.success("image Added");
                $scope.selectedImagesArray.push(image)
                
            }
            
        }
        
        
        
    }
    $scope.isImageSelected=function(image){
        var flag=0
   angular.forEach($scope.selectedImagesArray, function(value, key) {
         if(value==image) {
                flag=1;
                return flag;
            }             
                
     });     
        
            if(flag)
                return flag;
            else
                return flag;
                        
    }
        
    
})