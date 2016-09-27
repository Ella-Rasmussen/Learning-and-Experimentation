/**
 * Created by Ella on 2016-08-24.
 */
Template.Menu.onCreated(function(){
    var self = this;
    // unsubsribes user from old subscriptions
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: ()=> {
        return Recipes.find({inMenu: true});
    }
});