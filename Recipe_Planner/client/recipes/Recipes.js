/**
 * Created by Ella on 2016-08-24.
 */
Template.Recipes.onCreated(function(){
    var self = this;
    // unsubsribes user from old subscriptions
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.Recipes.helpers({
   recipes: ()=> {
       return Recipes.find({});
   }
});

Template.Recipes.events({
    'click .new-recipe': () => {
        Session.set('newRecipe', true);
    }
});