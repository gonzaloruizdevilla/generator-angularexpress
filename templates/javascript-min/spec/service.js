'use strict';

describe('Service: <%= classedName %>', function () {

  // load the service's module
<<<<<<< HEAD
  beforeEach(module('<%= scriptAppName %>'));
=======
  beforeEach(module('<%= scriptAppName %>App'));
>>>>>>> 09f0f7b... feat(gen): allow app names to have custom suffix

  // instantiate service
  var <%= classedName %>;
  beforeEach(inject(function(_<%= classedName %>_) {
    <%= classedName %> = _<%= classedName %>_;
  }));

  it('should do something', function () {
    expect(!!<%= classedName %>).toBe(true);
  });

});
