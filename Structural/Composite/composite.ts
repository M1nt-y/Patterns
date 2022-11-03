interface ITreeComponent {
    operation(): string;
}

abstract class TreeComponent implements ITreeComponent{
    protected parent!: TreeComponent | null;
    public setParent(parent: TreeComponent | null) {
        this.parent = parent;
    }
    public getParent(): TreeComponent | null {
        return this.parent;
    }
    public add(component: TreeComponent): void { }
    public remove(component: TreeComponent): void { }
    public abstract operation(): string;
}

class Leaf extends TreeComponent {
    public operation(): string { return 'Leaf'; }
}

class Fruit extends TreeComponent {
    public operation(): string { return 'Fruit'; }
}

class Tree extends TreeComponent {
    protected children: Array<TreeComponent> = new Array<TreeComponent>();
    public add(component: TreeComponent): void {
        this.children.push(component);
        component.setParent(this);
    }
    public remove(component: TreeComponent): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    }
    operation(): string {
        const results = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `Branch(${results.join('+')})`;
    }
}

function resultCode(component: TreeComponent) {
    console.log(`RESULT: ${component.operation()}`);
}

const tree = new Tree();
const branch1 = new Tree();
branch1.add(new Leaf());
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Tree();
branch2.add(new Leaf());
branch2.add(new Fruit());
branch2.add(new Leaf());
const branch3 = new Tree();
branch3.add(new Leaf());
branch3.add(new Leaf());
branch3.add(new Fruit());
branch3.add(new Leaf());
tree.add(branch1);
tree.add(branch2);
tree.add(branch3);
resultCode(tree);