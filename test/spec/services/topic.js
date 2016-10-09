'use strict';

describe('Service: Topic', function () {

  // load the service's module
  beforeEach(module('motoApp'));

  // instantiate service
  var Topic;
  beforeEach(inject(function (_Topic_) {
    Topic = _Topic_;
  }));

  it('should do something', function () {
    expect(!!Topic).toBe(true);
  });

});
