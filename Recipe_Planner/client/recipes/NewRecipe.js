/**
 * Created by Ella on 2016-08-24.
 */
Template.NewRecipe.events({
    'click .fa-close': function() {
        Session.set('newRecipe', false);
    }
});