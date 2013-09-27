describe("AppRouter routes", function() {

  beforeEach(function() {
    this.router = new AppRouter;
    this.routeSpy = sinon.spy();
    try {
      Backbone.history.start({silent:true, pushState:true});
    } catch(e) {}
  });

  it("fires the todo detail route", function() {
    this.router.bind('route:todo', this.routeSpy);
    this.router.navigate("todo/1", true);
    expect(this.routeSpy).toHaveBeenCalledOnce();
    expect(this.routeSpy).toHaveBeenCalledWith("1");
  });

});
