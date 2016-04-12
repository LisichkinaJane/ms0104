(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($http, $scope, detailModel, $stateParams) {
    console.log("Details ctrl init");
        var dt = this;
        dt.url = null;
        dt.show = true;
        dt.hide = true;
      
         dt.newAuthorName = null;
         dt.newCommentText = null;
    
        dt.item = {};
        dt.comments = [];
      
    detailModel.getDetails($stateParams.id)
      .then(function (data) {
        dt.item = data;
        dt.url = data.images[0];
    
      }, function (reject) {
        console.log(reject);
      });
      
        dt.setImage = function(url) {
      dt.url = url;
  }

    dt.changeShow = function(){
        dt.show = !dt.show;
        dt.hide = !dt.hide;
    };
      
      detailModel.getComments($stateParams.id)
      .then(function (data) {
        dt.comments = data;
    
      }, function (reject) {
        console.log(reject);
      });
     
      dt.setComments = function (e){
            var model = null; 
          if(e.type ==='click' && dt.newAuthorName !=='' && dt.newCommentText !== ''){
              model = {
                  'item_id':$stateParams.id,
                  'author': dt.newAuthorName,
                  'item_rating':dt.rating,
                  'text': dt.newCommentText 
              };
              
        detailModel.setComments(model)
            .then(function(response){
            dt.coments.push(response);
        });
              
          }
      };
      
      }
})();
