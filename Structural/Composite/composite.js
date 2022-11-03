var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
    }
    TreeComponent.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    TreeComponent.prototype.getParent = function () {
        return this.parent;
    };
    TreeComponent.prototype.add = function (component) { };
    TreeComponent.prototype.remove = function (component) { };
    return TreeComponent;
}());
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leaf.prototype.operation = function () { return 'Leaf'; };
    return Leaf;
}(TreeComponent));
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fruit.prototype.operation = function () { return 'Fruit'; };
    return Fruit;
}(TreeComponent));
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = new Array();
        return _this;
    }
    Tree.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Tree.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Tree.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return "Branch(".concat(results.join('+'), ")");
    };
    return Tree;
}(TreeComponent));
function resultCode(component) {
    console.log("RESULT: ".concat(component.operation()));
}
var tree = new Tree();
var branch1 = new Tree();
branch1.add(new Leaf());
branch1.add(new Leaf());
branch1.add(new Leaf());
var branch2 = new Tree();
branch2.add(new Leaf());
branch2.add(new Fruit());
branch2.add(new Leaf());
var branch3 = new Tree();
branch3.add(new Leaf());
branch3.add(new Leaf());
branch3.add(new Fruit());
branch3.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
resultCode(tree);
