/**
 * Created by Ella on 2016-08-24.
 */
Template.ShoppingList.onCreated(function(){
    var self = this;
    // unsubsribes user from old subscriptions
    self.autorun(function(){
        self.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList: ()=> {
        return Recipes.find({inMenu: true});
    }
});