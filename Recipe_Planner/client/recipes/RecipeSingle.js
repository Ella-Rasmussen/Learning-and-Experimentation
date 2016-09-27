/**
 * Created by Ella on 2016-08-24.
 */
Template.RecipeSingle.onCreated(function(){
    var self = this;
    // unsubsribes user from old subscriptions
    self.autorun(function(){
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});

Template.RecipeSingle.helpers({
    recipe: ()=> {
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({_id: id});
    }
});