App.LeadsController = Ember.ArrayController.extend({

  sortProperties: ['lastName', 'firstName'],

  leads: function() {
    return this.get('search') ? this.get('filteredLeads') : this
  }.property('search', 'filteredLeads'),

  filteredLeads: function() {
    var search = this.get('search').toLowerCase()
    return this.filter(function(lead) {
      return lead.get('fullName').toLowerCase().indexOf(search) != -1
    })
  }.property('search', 'this.@each.fullName'),

})
