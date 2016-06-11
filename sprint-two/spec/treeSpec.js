describe('tree', function() {
  var tree;

  //example callback for testing purposes
  //exampleCB converts all node.value to strings
  var exampleCB = function(node) {
    node.value = node.value + '';
  };

  beforeEach(function() {
    tree = Tree();   
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });


  //New tests for advanced portions
  it('should add parent to each node unless the node is the only one', function() {
    tree.addChild(5);
    expect(tree.children[0].parent).to.equal(null);
    tree.children[0].addChild(6);
    tree.children[0].addChild(4);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
    expect(tree.children[0].children[1].parent.value).to.equal(5);
  });

  it('should traverse the tree and execute a callback on each node', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(exampleCB, tree);
    expect(tree.contains('5')).to.equal(true);
    expect(tree.contains('6')).to.equal(true);
    expect(tree.contains('7')).to.equal(true);
    expect(tree.contains('8')).to.equal(true);
  });

  it('should split node from its parent into its own tree when removeFromParent is invoked', function() {
    tree.addChild(5);
    tree.children[0].addChild(2);
    tree.children[0].addChild(8);
    tree.children[0].children[0].addChild(1);
    tree.children[0].children[0].addChild(3);
    tree.children[0].children[1].addChild(7);
    tree.children[0].children[1].addChild(9);
    //Dissasociated tree should still contain its child nodes
    expect(tree.removeFromParent(2).contains(1)).to.equal(true);
    //Old tree should still contain the branches that weren't pruned
    expect(tree.contains(8)).to.equal(true);
    //Old tree shouldn't contain pruned children
    expect(tree.contains(3)).to.equal(false);
  });

});
