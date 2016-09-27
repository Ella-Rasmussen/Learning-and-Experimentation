/**
 * Created by Ella on 2016-08-24.
 */
Meteor.publish('recipes', function(){
    return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(id){
    check(id, String); // make sure value of id is a string
    return Recipes.find({_id: id});
});